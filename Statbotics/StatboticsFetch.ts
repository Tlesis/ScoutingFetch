import { APIs, Fetch } from "../BaseFetch";

export class StatboticsFetch extends Fetch {

    constructor(year: number, event: string) {
        super(year, event);
    }

    private stat(subpath: string, options?: {}) { return Fetch.f(APIs.Statbotics, subpath, options); }

    /****************************** Statbotics REST API Wrappers ******************************/
    // All functions are worse explained on the Statbotics REST API docs:
    // https://www.statbotics.io/api/rest

    /**
     * /v2/
     * @returns Read Root
     */
    public async root() {
        return this.stat("")
            .then((res) => res.json() as Promise<{ name: string }>);
    }

    /************************** END OF Statbotics REST API Wrappers **************************/
}