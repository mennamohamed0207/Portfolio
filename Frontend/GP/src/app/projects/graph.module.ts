import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache, ApolloLink } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';

const uri = 'https://api.github.com/graphql'; // <-- add the URL of the GraphQL server here

export function provideApollo(httpLink: HttpLink) {
    const basic = setContext((operation, context) => ({
        headers: {
            Accept: 'charset=utf-8'
        }
    }));
    const authLink = new ApolloLink((operation, forward) => {
        // Get the authentication token from local storage if it exists
        const token = ""; //Your github token here
        
        // Use the setContext method to set the HTTP headers.
        operation.setContext({
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          }
        });
    
        // Call the next link in the middleware chain.
        return forward(operation);
      });


    // const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
    // const cache = new InMemoryCache();
    const http = httpLink.create({ uri });

    return {
        link: ApolloLink.from([authLink,http ]),
        cache: new InMemoryCache(),
      };
}

@NgModule({
    exports: [ApolloModule, HttpClientModule, HttpClientModule],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: provideApollo,
            deps: [HttpLink],
        },
    ],
})
export class GraphQLModule { }
