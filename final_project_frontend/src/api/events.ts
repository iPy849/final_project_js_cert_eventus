import { IEvent } from '@/types'
import { AxiosResponse } from "axios";
import axiosInstance from "./axios";


function GetHottestEvent(): Promise<AxiosResponse> {
    return axiosInstance().get("/view/hottest");
}

function GetNextEvents(offset: number = 0, limit: number = 9): Promise<AxiosResponse> {
  return axiosInstance().get(`/view/upcoming?o=${offset}&l=${limit}`);
}

function GetCloseDateEvents(): Promise<AxiosResponse> {
    return axiosInstance().get("/view/closeDates");
}

export default {
    GetHottestEvent,
    GetNextEvents,
    GetCloseDateEvents
}