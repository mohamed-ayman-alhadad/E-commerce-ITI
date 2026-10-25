# Exclusive Storefront

A React 19 e-commerce storefront built with Vite. The app uses React Router for navigation, Redux Toolkit for client-side shopping and account state, TanStack Query for catalog requests, Axios for API access, and Bootstrap/Tailwind/CSS modules for styling.

## Run locally

Use Node.js 18 or later.

```sh
npm install
npm run dev
```

Available checks:

```sh
npm run build
npm run lint
```

There is currently no automated test script configured.

## Existing integrations

- Product and category data are requested from the Route Academy API configured in `src/Utils/axiosInstance.js`.
- Sign-in and sign-up use the existing API endpoints. The returned token and user details are stored in browser local storage.
- Cart and wishlist changes are held in Redux state for the current app session.
- Product search, category selection, and sorting are applied to the catalog data loaded by the app.

## Current limitations

The checkout page does not submit orders or process payments. Coupon redemption and contact-form submission are not connected to a service. Profile edits are saved only in the current browser and are not synchronized with the account API. These screens explain their current status rather than reporting a simulated success.
