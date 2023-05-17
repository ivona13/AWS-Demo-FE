import axios from "axios";
import { PersonDTO } from "./PersonDTO";

export const getPersons = async (): Promise<{ content: PersonDTO[] }> => {
    const { data, status } = await axios.get<{ content: PersonDTO[] }>('/api/v1/persons');
    return data;
}