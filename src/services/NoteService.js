import axios from "axios";

const NOTE_REST_API_URL = "http://localhost:8080/notes";

class NoteService {
    async getNotes() {
        try {
            const response = await axios.get(NOTE_REST_API_URL);
            return response.data; 
        } catch (error) {
            console.error("There was an error retrieving the notes!", error);
            throw error;
        }
    }

    async getByNoteId(id) {
        try {
            const response = await axios.get(NOTE_REST_API_URL + '/' + id);
            return response.data;
        } catch (error) {
            console.error("There was an error retrieving the note!", error);
            throw error;
        }
    }

    async postNote(note) {
        try {
            const response = await axios.post(
                NOTE_REST_API_URL, {
                    record: note.record,
                    date: note.date
                }
            );
            return response.data;
        } catch (error) {
            console.error("There was an error creating the note!", error);
            throw error;
        }
    }

    async putNote(id, note) {
        try {
            const response = await axios.put(
                NOTE_REST_API_URL + "/" + id, {
                    record: note.record,
                    date: note.date  
                }
            );
            return response.data;
        } catch (error) {
            console.error("There was an error updating the note!", error);
            throw error;
        }
    }

    async deleteNote(id) {
        try {
            const response = await axios.delete(NOTE_REST_API_URL + "/" + id);
            return response.data;
        } catch (error) {
            console.error("There was an error deleting the note!", error);
            throw error;
        }
    }
}

export default new NoteService();
