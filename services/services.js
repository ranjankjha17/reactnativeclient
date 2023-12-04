import axios from "axios"

export const createNewGroup = async (data) => {
    const response = await axios.post('http://localhost:5000/create-group', data, {
        headers: {
            'Content-Type': "application/json",
            'Accept': "application/json",
        }
    }
    )
    return response.data
}