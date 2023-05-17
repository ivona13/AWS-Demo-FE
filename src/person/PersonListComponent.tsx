import React, { useEffect, useState } from "react"
import { PersonDTO } from "./PersonDTO";
import { getPersons } from "./PersonService.ts";

const PersonList = () => {
    const [persons, setPersons] = useState<PersonDTO[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getPersons();
                setPersons(res.content);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            Person length: {persons.length}
        </div>
    )
}

export default PersonList;