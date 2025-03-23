// import {
//     QueryClient,
//     QueryClientProvider,
//   } from '@tanstack/react-query'

  
//   // Create a client
//   const queryClient = new QueryClient({
//     queryCache: {
//         onError: error => {
//             console.error('Error while fetching data:', error)
//         }
//     },
//     defaultOptions: {
//         queries: {
//             refetchOnWindowFocus: false,
//             retry: false
//         }
//     }
//   })

//   export const QueryProviders = ({children}) => {
//       <QueryClientProvider client={queryClient}>
//         {children}
//       </QueryClientProvider>
    
//   }
  