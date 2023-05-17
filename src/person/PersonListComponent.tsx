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
            Num of persons: {persons.length}
            {persons.length > 0 && 
                <table>
                    <tr>
                        <th>Number</th>
                        <th>Lastname</th>
                        <th>Firstname</th>
                    </tr>
                    {persons.map((p, ind) => 
                        <tr>
                            <td>{ind + 1}.</td>
                            <td>{p.lastName}</td>
                            <td>{p.firstName}</td>
                        </tr>
                    )}
                </table>
            }
        </div>
    );
}

export default PersonList;