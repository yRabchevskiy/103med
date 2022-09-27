import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

// const handleError = ({ networkError, graphQLErrors, message }: ApolloError) => {
//   debugger
//   if (graphQLErrors) {
//      graphQLErrors.forEach(e => console.log('Apollo GraphQL Error', e));
//   }
//   if (networkError) {
//      const { error: serverErrors, ...apolloNetworkError } = networkError as any;
//      console.log('Apollo Network Error', apolloNetworkError);
//      serverErrors.error?.errors.forEach((e: any) => console.log('Apollo Network Error', e));
//   }
//   return throwError(message);
// }

@Injectable({ providedIn: 'root' })
export class BaseHttpService {
  headers: HttpHeaders;
  BASE_API_URL = 'http://localhost:8080/graphql';
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json')
      .set('Method', 'POST');
  }

  public query<T>(options: {
    query: string;
    variables?: { [key: string]: any };
  }): Observable<T> {
    return this.http
      .post<{ data: T }>(this.BASE_API_URL, {
        query: options.query,
        variables: options.variables,
      }, { headers: this.headers })
      .pipe(map((d) => d.data));
  }

  public mutate<T>(options: {
    mutation: string;
    variables?: { [key: string]: any };
  }): Observable<any> {
    return this.http
      .post<{ data: T }>(this.BASE_API_URL, {
        query: options.mutation,
        variables: options.variables,
      })
      .pipe(map((d) => d.data));
  }

  // doQuery<T>(query: any): Observable<T> {
  //   debugger
  //   return this.apollo.query<T>({ query: query }).pipe(
  //     map(response => response.data),
  //     catchError(handleError)
  //   );
  // }

  // doMutate<T, B>(mutate: any, variable: T): Observable<any> {
  //   return this.apollo
  //     .mutate({
  //       mutation: mutate,
  //       variables: variable
  //       //  variables: {
  //       //     newItem: item
  //       //  }
  //     })
  //     .pipe(map(response => response.data), catchError(handleError));
  // }
}