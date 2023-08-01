import { createClient } from "next-sanity";

// configure our sanity client
const projectId='56qex21w';
const dataset='production';
const apiVersion='2023-01-01'
export const client=createClient({
projectId,
dataset,
apiVersion,
useCdn:true

})