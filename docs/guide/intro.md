# The Concept of ProComponents

Similar to Ant Design Pro Components, Naive Ultra is an advanced component library based on Naive UI, providing higher-level abstraction and encapsulation for backend systems.

We have made some adjustments to the design of Naive Ultra to better align with the design style of Naive UI and to provide the ability to quickly and efficiently build high-quality backend applications.

## Design Ideas

> The following content is adapted from Ant Pro Components

For almost any business, we are essentially defining a series of behaviors based on state. Take tables as an example: first, we need a state `data` to store the data requested from the server. To optimize the experience, we also need a `loading` state. So we have a series of behaviors: we need to set `loading=true` first, then initiate a network request, and after the request completes, set `data` to the requested data and `loading=false`. One network request is done. Although this is very simple, a business system has a considerable number of tables, and each table is only defined once, but the workload is still very large.

If you need to re-request the network, you need to encapsulate the above behavior into a method. When clicking to reload data, if there is pagination, you also need a new variable `page`. You need to determine whether to reset the page number to the first page before re-requesting, which introduces another variable. If your form also needs to control the number of items displayed per page, it becomes even more cumbersome. This kind of repetitive work wastes a lot of our time.

## A component !≈ a page

We do not want you to treat components as pages, but rather as supersets of functionality. This keeps your code flexible, which is also a key difference from Ant Design Pro Components.

A list page can be composed of `pro-form` + `pro-table`, while an edit page can use `pro-form` + `button` or various other components. This allows us to focus on implementing core business logic and page effects.

We are very cautious when developing new components. We try to split component functionality into smaller components as much as possible, so you can better compose them as needed.
