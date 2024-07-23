import https, { RequestOptions } from "https"

class DonkiRequestService {

    private headers: {
        "Content-Type": string;
    };

    constructor() {
        this.headers = {
            "Content-Type": "application/json"
        }
    }

    getRequest(endpoint: string, queryParams: URLSearchParams) {
        return new Promise((resolve, reject) => {

            queryParams.set("API_KEY", process.env.API_KEY!);
            const options: RequestOptions = {
                hostname: "api.nasa.gov",
                path: `/DONKI/${endpoint}?${queryParams}`,
                method: "GET",
                headers: this.headers
            }

            console.log(`${options.method} - ${options.hostname}${options.path}`);

            const request = https.request(options, res => {
                let data = "";

                res.on("data", chunk => data += chunk);

                res.on("end", () => resolve(data));
                res.on("error", error => reject(error));
            });

            request.on("error", error => reject(error));
            request.end();
        });
    }
}

export default DonkiRequestService;