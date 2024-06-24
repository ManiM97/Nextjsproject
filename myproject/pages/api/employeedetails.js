export default async function handler(req, res) {
    try {
        const fetchResponse = await fetch('https://reqres.in/api/users?page=2', {
            method: 'GET'
        });
        const data = await fetchResponse.json();
        console.log("DATA",data)
        
        // You can use the fetched data here if needed
        // console.log("Fetched Data:", data);

        return res.status(200).json({ name: data });
    } catch (error) {
        console.log("ERROR OCCURED", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
