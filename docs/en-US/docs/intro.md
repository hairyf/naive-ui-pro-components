# The concept of ProComponents

Similar to Ant Design Pro Components, Naive UI Pro Components is an advanced component library based on Naive UI, providing higher-level abstraction and encapsulation for backend systems.

We have made some adjustments to the design of Naive UI Pro Components to better align with Naive UI's design style and provide the ability to rapidly and efficiently build high-quality backend applications.

## Design Ideas

> The following content comes from ant pro components

For almost any business, what we do is actually define a series of behaviors based on a state, take the table above as an example, first we need a state `dataSource` for storing the data requested from the server, and for optimizing the experience, we also need a `loading`. So we have a series of behaviors, we need to set `loading=true` first, then launch a network request, after the network request is completed, set `dataSource` for the requested data, `loading=false`, a network request is completed, although very simple, but a business system has a considerable number of tables, and each table is defined so once, the workload is very large.

If you want to re-request the network, we need to encapsulate the behavior, the above behavior into a method, click to reload the data, if you have paging, then you need a new variable page, we need to go before the re-request according to the need to determine whether to reset the page to the first page, which introduces another variable. If your form also has to control the number of pages per page, then it will be even more cumbersome. This kind of repetitive work can waste a lot of our time.

## A component !≈ a page

We don't want you to treat a component as a page, but rather as a collection of functionalities. This allows your code to remain flexible, which is also what sets it apart from Ant Design Pro Components.

A list page can be composed using `pro-form` + `pro-table`, while an editing page can utilize `pro-form` + `button` or other diverse components. This enables us to focus on implementing core business logic and page effects.
