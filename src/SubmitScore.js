function SubmitScore() {
    return (
        <form class="d-flex flex-row justify-content-center align-items-center">
            <div class="p-2">
                <select class="form-select" id="Country" required>
                    <option selected disabled>
                        Country...
                    </option>
                    <option>🇸🇪 Sweden </option>
                    <option>🇺🇦 Ukraine </option>
                    <option>🇩🇪 Germany </option>
                    <option>🇱🇺 Luxembourg </option>
                    <option>🇳🇱 Netherlands </option>
                    <option>🇮🇱 Israel </option>
                    <option>🇱🇹 Lithuania </option>
                    <option>🇪🇸 Spain </option>
                    <option>🇪🇪 Estonia </option>
                    <option>🇮🇪 Ireland </option>
                    <option>🇱🇻 Latvia </option>
                    <option>🇬🇷 Greece </option>
                    <option>🇬🇧 United Kingdom </option>
                    <option>🇳🇴 Norway </option>
                    <option>🇮🇹 Italy </option>
                    <option>🇷🇸 Serbia </option>
                    <option>🇫🇮 Finland </option>
                    <option>🇵🇹 Portugal </option>
                    <option>🇦🇲 Armenia </option>
                    <option>🇨🇾 Cyprus </option>
                    <option>🇨🇭 Switzerland </option>
                    <option>🇸🇮 Slovenia </option>
                    <option>🇭🇷 Croatia </option>
                    <option>🇬🇪 Georgia </option>
                    <option>🇫🇷 France </option>
                    <option>🇦🇹 Austria </option>
                </select>
            </div>

            <div class="p-2">
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

            <div class="p-2">
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default SubmitScore;
