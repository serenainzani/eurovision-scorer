import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

function SubmitScore() {
    async function handleSubmit(e) {
        e.preventDefault();
        const country = e.target.country.value;
        const score = e.target.score.value;
        const user = localStorage.getItem("user");
        const timestamp = Date.now();
        const data = {
            user: user,
            country: country,
            score: score,
            timestamp: timestamp,
        };

        if (country !== "no-country") {
            try {
                const docRef = await addDoc(collection(db, "scores"), data);
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    }
    return (
        <form
            method="post"
            onSubmit={handleSubmit}
            className="d-flex flex-row justify-content-center align-items-center"
        >
            <div className="p-2">
                <select
                    className="form-select"
                    id="country"
                    name="country"
                    required
                >
                    <option value="no-country">Country...</option>
                    <option value="Sweden">🇸🇪 Sweden</option>
                    <option value="Ukraine">🇺🇦 Ukraine</option>
                    <option value="Germany">🇩🇪 Germany</option>
                    <option value="Luxembourg">🇱🇺 Luxembourg</option>
                    <option value="Netherlands">🇳🇱 Netherlands</option>
                    <option value="Israel">🇮🇱 Israel</option>
                    <option value="Lithuania">🇱🇹 Lithuania</option>
                    <option value="Spain">🇪🇸 Spain</option>
                    <option value="Estonia">🇪🇪 Estonia</option>
                    <option value="Ireland">🇮🇪 Ireland</option>
                    <option value="Latvia">🇱🇻 Latvia</option>
                    <option value="Greece">🇬🇷 Greece</option>
                    <option value="United Kingdom">🇬🇧 United Kingdom</option>
                    <option value="Norway">🇳🇴 Norway</option>
                    <option value="Italy">🇮🇹 Italy</option>
                    <option value="Serbia">🇷🇸 Serbia</option>
                    <option value="Finland">🇫🇮 Finland</option>
                    <option value="Portugal">🇵🇹 Portugal</option>
                    <option value="Armenia">🇦🇲 Armenia</option>
                    <option value="Cyprus">🇨🇾 Cyprus</option>
                    <option value="Switzerland">🇨🇭 Switzerland</option>
                    <option value="Slovenia">🇸🇮 Slovenia</option>
                    <option value="Croatia">🇭🇷 Croatia</option>
                    <option value="Georgia">🇬🇪 Georgia</option>
                    <option value="France">🇫🇷 France</option>
                    <option value="Austria">🇦🇹 Austria</option>
                </select>
            </div>

            <div className="p-2">
                <input
                    placeholder="Score (1-10)"
                    type="number"
                    id="score"
                    name="score"
                    min="1"
                    max="10"
                    required
                />
            </div>

            <div className="p-2">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default SubmitScore;
