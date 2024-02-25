import { $host } from ".";

export const getSeller = async () => {
    const response = await $host.get('api/seller')
    return response
} 

export const getProducts = async () => {
    const response = await $host.get('api/product')
    return response
} 

export const createSeller = async (name) => {
    const response = await $host.post('api/seller', {name})
    return response
} 

export const createCheque = async (name, productId, sellerId) => {
    const response = await $host.post('api/cheque', {name, productId, sellerId})
    return response
} 
export const getCheque = async () => {
    const response = await $host.get('api/cheque')
    return response
} 

