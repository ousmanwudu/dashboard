┌─────────────────────────────────────────┐
│ Dashboard                 [ Add User ] │
└─────────────────────────────────────────┘
<div className="flex items-center justify-between">
  <h1 className="text-xl font-bold">
    Dashboard
  </h1>

  <button className="rounded-lg bg-black px-4 py-2 text-white">
    Add User
  </button>
</div>

┌──────────┐ ┌──────────┐ ┌──────────┐
│ Card 1   │ │ Card 2   │ │ Card 3   │
└──────────┘ └──────────┘ └──────────┘
<div className="grid grid-cols-3 gap-6">

<div className="
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-6
">

mobile   → 1 column
tablet   → 2 columns
desktop  → 3 columns

Level 5 — Responsive Tailwind

Tailwind is mobile-first.

<div className="
  w-full
  md:w-1/2
  lg:w-1/3
">

Think:

default → mobile
sm      → small
md      → tablet
lg      → desktop
xl      → large desktop
2xl     → very large

Example:

<h1 className="
  text-xl
  sm:text-2xl
  lg:text-4xl
  font-bold
">
  Dashboard
</h1>



Level 6 — Borders and surfaces

You'll learn how to create polished UI.

<div className="
  border
  border-gray-200
  rounded-xl
  bg-white
  shadow-sm
">

Then:

border
border-2
border-t
border-b
border-l
border-r


rounded
rounded-md
rounded-lg
rounded-xl
rounded-2xl
rounded-full


shadow-sm
shadow
shadow-md
shadow-lg
shadow-xl

Level 7 — Pseudo classes

This is where Tailwind starts becoming powerful.

Hover
<button className="
  bg-blue-600
  hover:bg-blue-700
">
Focus
<input className="
  border
  focus:border-blue-500
  focus:ring-2
  focus:ring-blue-100
"/>
Active
<button className="
  active:scale-95
">
Disabled
<button
  disabled
  className="
    disabled:cursor-not-allowed
    disabled:opacity-50
  "
>


min-h-screen = Minimum height = screen height.


You just used:

grid grid-cols-3 gap-4

This is Grid.

Think:

GRID
↓
rows + columns


┌──────┐ ┌──────┐ ┌──────┐
│      │ │      │ │      │
└──────┘ └──────┘ └──────┘

Flex is different:

flex items-center gap-4

Think:

FLEX
↓
one-dimensional arrangement


[ A ] [ B ] [ C ] [ D ]

This distinction is extremely important.
justify-start
[A][B]

justify-center
       [A][B]

justify-end
              [A][B]

justify-between
[A]                                [B]

                 FLEX
                  │
        ┌─────────┴─────────┐
    

w-full means:

Make my width 100% of my containing block.

With a sidebar next to it, that can cause layout problems.

flex-1 means:

Give me whatever space is left in the Flex container. 


w-64
I have a specific width.
shrink-0
Don't make me smaller.
flex-1
Give me the remaining space.


<div className="ml-auto flex items-center gap-4">

There are three concepts together:

ml-auto
flex
gap-4

Meaning:

push me right
+
put children horizontally
+
give children spacing

gap

Use with:

flex
grid

Example:

<div className="flex gap-4">
space-y

Use when you want vertical spacing between children.

<ul className="space-y-2">

You'll often see both in real projects.


4. fixed
fixed

means:

Position the sidebar relative to the viewport.

It doesn't move normally with the document layout.

5. inset-y-0

This is a useful Tailwind shortcut.

inset-y-0

means:

top: 0
bottom: 0

So the sidebar stretches vertically:

┌──────┐
│      │ ← top 0
│      │
│      │
│      │
│      │ ← bottom 0
└──────┘

Combined:

fixed inset-y-0 left-0

means:

Fixed to the left side and stretch from top to bottom.

6. z-50
z-50

controls stacking order.

We want the mobile sidebar above the content:

sidebar
   ↑
content

So:

z-50

puts it above normal content.

7. The most interesting part: transform

We use:

translate-x-0

for visible.

And:

-translate-x-full

for hidden off-screen.

Think:

translate-x-0


┌────────────┐
│ SIDEBAR    │
└────────────┘

while:

-translate-x-full


← ← ←
┌────────────┐
│ SIDEBAR    │
└────────────┘

The sidebar moves completely to the left.

8. React controls the class

This:

${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

means:

if sidebarOpen === true
    translate-x-0


otherwise
    -translate-x-full

This is a very important React + Tailwind pattern.

9. Add animation

Use:

transition-transform duration-300

Now when the state changes:

hidden ←──── animation ────→ visible

instead of instantly appearing.

10. Mobile hamburger button

We need a button visible only on mobile.

Inside your navbar:

<button
  onClick={() => setSidebarOpen(!sidebarOpen)}
  className="rounded-lg p-2 hover:bg-gray-100 md:hidden"
>
  ☰
</button>

The important part:

md:hidden

means:

mobile → visible
desktop → hidden

Exactly opposite of:

hidden md:block

