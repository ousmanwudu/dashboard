import { useEffect, useMemo, useState } from "react";
import Table from "../../components/ui/Table";
import { getOrders } from "../../services/orderServices";
import StatusBadge from "../../components/ui/StatusBadge";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";

function OrderTable() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const statusOptions = [
    { value: "", label: "All Status" },
    { value: "Delivered", label: "Delivered" },
    { value: "Processing", label: "Processing" },
    { value: "Shipped", label: "Shipped" },
    { value: "Pending", label: "Pending" },
    { value: "Cancelled", label: "Cancelled" },
  ];

  const filteredOrders = useMemo(() => {
    const query = search.toLowerCase().trim();

    return orders.filter((order) => {
      const matchesSearch =
        order.payment?.toLowerCase().includes(query) ||
        order.status?.toLowerCase().includes(query) ||
        order.customer?.toLowerCase().includes(query) ||
        order.email?.toLowerCase().includes(query) ||
        order.product?.toLowerCase().includes(query);

      const matchesStatus =
        !status || order.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [orders, search, status]);

  const columns = [
    {
      key: "customer",
      header: "Customer",
    },
    {
      key: "email",
      header: "Email",
    },
    {
      key: "product",
      header: "Product",
    },
    {
      key: "amount",
      header: "Amount",
      render: (value) => (
        <span className="font-medium">
          ${Number(value).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (value) => (
        <StatusBadge status={value} />
      ),
    },
    {
      key: "payment",
      header: "Payment",
      render: (value) => (
        <StatusBadge status={value} />
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (_, row) => (
        <div className="flex gap-2">
          <button
            className="rounded-md px-2 py-1 text-xs text-blue-600 hover:bg-blue-50"
            onClick={() => console.log("Edit", row.id)}
          >
            Edit
          </button>

          <button
            className="rounded-md px-2 py-1 text-xs text-red-600 hover:bg-red-50"
            onClick={() => console.log("Delete", row.id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const loadOrders = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getOrders();

      setOrders(response);
    } catch (err) {
      console.error(err);

      setError(
        err.message || "Failed to fetch orders"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-8 font-medium text-blue-600">
        Loading orders...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-50 p-4 text-center text-sm text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-4">

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">

        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search orders..."
          className="sm:w-80"
        />

        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          options={statusOptions}
          className="rounded-lg border px-3 py-2"
        />

        {(search || status) && (
          <button
            onClick={() => {
              setSearch("");
              setStatus("");
            }}
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            Clear
          </button>
        )}
      </div>

      {/* Result count */}
      <div className="text-sm text-gray-500">
        Showing {filteredOrders.length} of {orders.length} orders
      </div>

      {/* Table */}
      <Table
        data={filteredOrders}
        columns={columns}
        rowKey="id"
      />

    </div>
  );
}

export default OrderTable;