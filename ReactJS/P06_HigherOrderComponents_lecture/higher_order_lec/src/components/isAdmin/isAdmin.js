// function protectedRoute(allowedRoles, inRole) {
//     return function (WrappedComponent) {
//         //here role should be coming from WrappedComponent
//         return function ({ role, ...rest }) {
//             if (inRole(allowedRoles)) {
//                 return <WrappedComponent {...rest} />;
//             }
//             return <h1>Not Authorized</h1>;
//         };
//     };
// }


// const AdminRoute = protectedRoute(['admin'], inRole);
// const ModeratorRoute = protectedRoute(['admin', 'moderator'], inRole);
// const MyProtectedRoute = AdminRoute(MyComponent);

// <Route path="/admin" component={MyProtectedRoute} />
