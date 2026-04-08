import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { AdminLoginBody, AdminLoginResponse, AdminSlotsResponse, Booking, CreateBookingBody, ErrorResponse, GetAdminBookingsParams, GetAdminSlotsParams, GetSlotsMonthParams, GetSlotsParams, HealthStatus, MonthSlotsResponse, SlotsResponse, UpdateSlotsBody } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * Returns server health status
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get available slots for a date
 */
export declare const getGetSlotsUrl: (params: GetSlotsParams) => string;
export declare const getSlots: (params: GetSlotsParams, options?: RequestInit) => Promise<SlotsResponse>;
export declare const getGetSlotsQueryKey: (params?: GetSlotsParams) => readonly ["/api/slots", ...GetSlotsParams[]];
export declare const getGetSlotsQueryOptions: <TData = Awaited<ReturnType<typeof getSlots>>, TError = ErrorType<unknown>>(params: GetSlotsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSlots>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSlots>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSlotsQueryResult = NonNullable<Awaited<ReturnType<typeof getSlots>>>;
export type GetSlotsQueryError = ErrorType<unknown>;
/**
 * @summary Get available slots for a date
 */
export declare function useGetSlots<TData = Awaited<ReturnType<typeof getSlots>>, TError = ErrorType<unknown>>(params: GetSlotsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSlots>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get slot availability summary for a month
 */
export declare const getGetSlotsMonthUrl: (params: GetSlotsMonthParams) => string;
export declare const getSlotsMonth: (params: GetSlotsMonthParams, options?: RequestInit) => Promise<MonthSlotsResponse>;
export declare const getGetSlotsMonthQueryKey: (params?: GetSlotsMonthParams) => readonly ["/api/slots/month", ...GetSlotsMonthParams[]];
export declare const getGetSlotsMonthQueryOptions: <TData = Awaited<ReturnType<typeof getSlotsMonth>>, TError = ErrorType<unknown>>(params: GetSlotsMonthParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSlotsMonth>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSlotsMonth>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSlotsMonthQueryResult = NonNullable<Awaited<ReturnType<typeof getSlotsMonth>>>;
export type GetSlotsMonthQueryError = ErrorType<unknown>;
/**
 * @summary Get slot availability summary for a month
 */
export declare function useGetSlotsMonth<TData = Awaited<ReturnType<typeof getSlotsMonth>>, TError = ErrorType<unknown>>(params: GetSlotsMonthParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSlotsMonth>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a new booking
 */
export declare const getCreateBookingUrl: () => string;
export declare const createBooking: (createBookingBody: CreateBookingBody, options?: RequestInit) => Promise<Booking>;
export declare const getCreateBookingMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createBooking>>, TError, {
        data: BodyType<CreateBookingBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createBooking>>, TError, {
    data: BodyType<CreateBookingBody>;
}, TContext>;
export type CreateBookingMutationResult = NonNullable<Awaited<ReturnType<typeof createBooking>>>;
export type CreateBookingMutationBody = BodyType<CreateBookingBody>;
export type CreateBookingMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Create a new booking
 */
export declare const useCreateBooking: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createBooking>>, TError, {
        data: BodyType<CreateBookingBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createBooking>>, TError, {
    data: BodyType<CreateBookingBody>;
}, TContext>;
/**
 * @summary Admin login
 */
export declare const getAdminLoginUrl: () => string;
export declare const adminLogin: (adminLoginBody: AdminLoginBody, options?: RequestInit) => Promise<AdminLoginResponse>;
export declare const getAdminLoginMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminLogin>>, TError, {
        data: BodyType<AdminLoginBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminLogin>>, TError, {
    data: BodyType<AdminLoginBody>;
}, TContext>;
export type AdminLoginMutationResult = NonNullable<Awaited<ReturnType<typeof adminLogin>>>;
export type AdminLoginMutationBody = BodyType<AdminLoginBody>;
export type AdminLoginMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Admin login
 */
export declare const useAdminLogin: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminLogin>>, TError, {
        data: BodyType<AdminLoginBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminLogin>>, TError, {
    data: BodyType<AdminLoginBody>;
}, TContext>;
/**
 * @summary Get all slots for a date with status
 */
export declare const getGetAdminSlotsUrl: (params: GetAdminSlotsParams) => string;
export declare const getAdminSlots: (params: GetAdminSlotsParams, options?: RequestInit) => Promise<AdminSlotsResponse>;
export declare const getGetAdminSlotsQueryKey: (params?: GetAdminSlotsParams) => readonly ["/api/admin/slots", ...GetAdminSlotsParams[]];
export declare const getGetAdminSlotsQueryOptions: <TData = Awaited<ReturnType<typeof getAdminSlots>>, TError = ErrorType<unknown>>(params: GetAdminSlotsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminSlots>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminSlots>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminSlotsQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminSlots>>>;
export type GetAdminSlotsQueryError = ErrorType<unknown>;
/**
 * @summary Get all slots for a date with status
 */
export declare function useGetAdminSlots<TData = Awaited<ReturnType<typeof getAdminSlots>>, TError = ErrorType<unknown>>(params: GetAdminSlotsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminSlots>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update slot availability for a date
 */
export declare const getUpdateAdminSlotsUrl: () => string;
export declare const updateAdminSlots: (updateSlotsBody: UpdateSlotsBody, options?: RequestInit) => Promise<AdminSlotsResponse>;
export declare const getUpdateAdminSlotsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminSlots>>, TError, {
        data: BodyType<UpdateSlotsBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAdminSlots>>, TError, {
    data: BodyType<UpdateSlotsBody>;
}, TContext>;
export type UpdateAdminSlotsMutationResult = NonNullable<Awaited<ReturnType<typeof updateAdminSlots>>>;
export type UpdateAdminSlotsMutationBody = BodyType<UpdateSlotsBody>;
export type UpdateAdminSlotsMutationError = ErrorType<unknown>;
/**
 * @summary Update slot availability for a date
 */
export declare const useUpdateAdminSlots: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminSlots>>, TError, {
        data: BodyType<UpdateSlotsBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateAdminSlots>>, TError, {
    data: BodyType<UpdateSlotsBody>;
}, TContext>;
/**
 * @summary Get bookings for a date
 */
export declare const getGetAdminBookingsUrl: (params: GetAdminBookingsParams) => string;
export declare const getAdminBookings: (params: GetAdminBookingsParams, options?: RequestInit) => Promise<Booking[]>;
export declare const getGetAdminBookingsQueryKey: (params?: GetAdminBookingsParams) => readonly ["/api/admin/bookings", ...GetAdminBookingsParams[]];
export declare const getGetAdminBookingsQueryOptions: <TData = Awaited<ReturnType<typeof getAdminBookings>>, TError = ErrorType<unknown>>(params: GetAdminBookingsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminBookings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminBookings>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminBookingsQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminBookings>>>;
export type GetAdminBookingsQueryError = ErrorType<unknown>;
/**
 * @summary Get bookings for a date
 */
export declare function useGetAdminBookings<TData = Awaited<ReturnType<typeof getAdminBookings>>, TError = ErrorType<unknown>>(params: GetAdminBookingsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminBookings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Cancel a booking
 */
export declare const getCancelBookingUrl: (id: number) => string;
export declare const cancelBooking: (id: number, options?: RequestInit) => Promise<void>;
export declare const getCancelBookingMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof cancelBooking>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof cancelBooking>>, TError, {
    id: number;
}, TContext>;
export type CancelBookingMutationResult = NonNullable<Awaited<ReturnType<typeof cancelBooking>>>;
export type CancelBookingMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Cancel a booking
 */
export declare const useCancelBooking: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof cancelBooking>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof cancelBooking>>, TError, {
    id: number;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map