import axios from 'axios'

export async function getExaminers() {
    try {
        const response = await axios.get('http://localhost:3001/examiners')
        return response.data
    } catch (error) {
        console.error('Error fetching examiners:', error)
        return []
    }
}