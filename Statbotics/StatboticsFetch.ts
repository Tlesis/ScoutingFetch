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

    /**
     * /v2/year/{year}
     * @param year optional year of the requested season
     * @returns Get a single Year object containing EPA percentiles, Week 1 match score statistics, and prediction accuracy
     */
    public async year(year?: number) {
        return this.stat(`year/${year ?? this._year}`)
            .then((res) => res.json() as Promise<StatYear>);
    }

    /**
     * /v2/years
     * @param options.metric dont even know where to start
     * @param options.ascending honestly i dont know, doesnt seem to do anything?
     * @param options.limit number of Year objects that should be returned
     * @param options.offset number of years after 2002 to start from for example offset of 20 starts returning seasons from 2022
     * @returns Get a list of Year objects from 2002 to [current season]
     */
    public async years(options?: {
        metric?: string,
        ascending?: boolean,
        limit?: number,
        offset?: number
    }) {
        return this.stat("years", options)
            .then((res) => res.json() as Promise<StatYear[]>);
    }

    /**
     * /v2/team/{team}
     * @param team the team number for the requested team
     * @returns Get a single Team object containing team name, location, normalized EPA statistics, and winrate
     */
    public async team(team: number) {
        return this.stat(`team/${team}`)
            .then((res) => res.json() as Promise<StatTeam>);
    }

    /**
     * /v2/teams/district/{district}
     * @param districtCode 4 letter abbreviation code for the requested district - can use the `FRC.DistrictCode` enum
     * @returns Get a list of Team objects from a single district
     */
    public async teamsDistrict(districtCode: FRC.DistrictCode | string) {
        return this.stat(`teams/district/${districtCode}`)
            .then((res) => res.json() as Promise<StatTeam[]>);
    }

    /**
     * /v2/teams/state/{state}
     * @param state 2-letter uppercase state abbreviation - can use `FRC.States` enum
     * @returns Get a list of Team objects from a single state
     */
    public async teamsState(state: FRC.States | string) {
        return this.stat(`teams/state/${state}`)
            .then((res) => res.json() as Promise<StatTeam[]>);
    }

    /**
     * /v2/teams
     * @param options all may be left unfilled - any contradictions will cause nothing to be returned
     * @param options.country country that the teams are based in
     * @param options.district district that the teams are apart of - can use `FRC.DistrictCode` enum
     * @param options.state state the teams are based in (if in the USA) - can use `FRC.States` enum
     * @param options.active whether or not the teams are actively competing in the season
     * @param options.offseason whether or not the teams are an offseason teams
     * @param options.metric idk what this means
     * @param options.ascending from what i can tell this does nothing?
     * @param options.limit amount of teams that should be returned - default 100
     * @param options.offset how far the `limit` "window" should be moved down
     * @returns Get a list of Team objects with optional filters
     */
    public async teams(options?: {
        country?: string,
        district?: FRC.DistrictCode | string,
        state?: FRC.States | string,
        active?: boolean,
        offseason?: boolean,
        metric?: string,
        ascending?: boolean,
        limit?: number,
        offset?: number
    }) {
        return this.stat("teams", options)
            .then((res) => res.json() as Promise<StatTeam[]>);
    }

    /**
     * /v2/team_year/{team}/{year}
     * @param team the team number for the requested team
     * @param year optional year of the requested season
     * @returns Get a single TeamYear object containing EPA summary, winrates, and location rankings
     */
    public async teamYear(team: number, year?: number) {
        return this.stat(`team_year/${team}/${year ?? this._year}`)
            .then((res) => res.json() as Promise<StatTeamYear>);
    }

    /**
     * /v2/team_years/team/{team}
     * @param team the team number for the requested team
     * @returns Get a list of TeamYear objects for a single team
     */
    public async teamYearsTeam(team: number) {
        return this.stat(`team_years/team/${team}`)
            .then((res) => res.json() as Promise<StatTeamYear[]>);
    }

    /**
     * /v2/team_years/year/{year}/district/{district}
     * @param district district that the teams are apart of - can use `FRC.DistrictCode` enum
     * @param year optional year of the requested season
     * @returns Get a list of TeamYear objects from a single district
     */
    public async teamYearsDistrict(district: FRC.DistrictCode | string, year?: number) {
        return this.stat(`team_years/year/${year ?? this._year}/district/${district}`)
            .then((res) => res.json() as Promise<StatTeamYear[]>);
    }

    /**
     * /v2/team_years/year/{year}/state/{state}
     * @param state state the teams are based in (if in the USA) - can use `FRC.States` enum
     * @param year optional year of the requested season
     * @returns Get a list of TeamYear objects from a single state
     */
    public async teamYearsState(state: FRC.States | string, year?: number) {
        return this.stat(`team_years/year/${year ?? this._year}/state/${state}`)
            .then((res) => res.json() as Promise<StatTeamYear[]>);
    }

    /**
     * 
     * @param options all may be left unfilled - any contradictions will cause nothing to be returned
     * @param options.team the team number for the requested team
     * @param options.year year the of requested season
     * @param options.country country that the teams are based in
     * @param options.district district that the teams are apart of - can use `FRC.DistrictCode` enum
     * @param options.state state the teams are based in (if in the USA) - can use `FRC.States` enum
     * @param options.offseason whether or not the teams are an offseason teams
     * @param options.ascending from what i can tell this does nothing? - default false
     * @param options.limit amount of teams that should be returned - default 100
     * @param options.offset how far the `limit` "window" should be moved down
     * @returns Get a list of TeamYear objects with optional filters
     */
    public async teamYears(options?: {
        team?: number,
        year?: number,
        country?: string,
        district?: FRC.DistrictCode | string,
        state?: FRC.States | string,
        offseason?: boolean,
        ascending?: boolean,
        limit?: number,
        offset?: number
    }) {
        return this.stat("team_years", options)
            .then((res) => res.json() as Promise<StatTeamYear[]>);
    }

    /**
     * /v2/event/{event}
     * @param eventKey TBA-style Event Key, eg `2016nytr`
     * @returns Get a single Event object containing event location, dates, EPA stats, prediction stats
     */
    public async event(eventKey?: string) {
        return this.stat(`event/${eventKey ?? this._eventkey}`)
            .then((res) => res.json() as Promise<StatEvent>);
    }

    /**
     * /v2/events/year/{year}
     * @param year optional year of the requested season
     * @returns Get a list of Event objects for a single year
     */
    public async eventsYear(year?: number) {
        return this.stat(`events/year/${year ?? this._year}`)
            .then((res) => res.json() as Promise<StatEvent[]>);
    }


    /**
     * /v2/events/year/{year}/district/{district}
     * @param district district that the events are apart of - can use `FRC.DistrictCode` enum
     * @param year optional year of the requested season
     * @returns Get a list of Event objects for a single (year, district) pair
     */
    public async eventsYearDistrict(district: FRC.DistrictCode | string, year?: number) {
        return this.stat(`events/year/${year ?? this._year}/district/${district}`)
            .then((res) => res.json() as Promise<StatEvent[]>);
    }

    /**
     * /v2/events/year/{year}/state/{state}
     * @param state state that the events are in - can use `FRC.State` enum
     * @param year optional year of the requested season
     * @returns Get a list of Event objects for a single (year, state) pair
     */
    public async eventsYearState(state: FRC.States | string, year?: number) {
        return this.stat(`events/year/${year ?? this._year}/state/${state}`)
            .then((res) => res.json() as Promise<StatEvent[]>);
    }

    /**
     * /v2/events/district/{district}
     * @param district district that the events are apart of - can use `FRC.DistrictCode` enum
     * @param year optional year of the requested season
     * @returns Get a list of Event objects for a single district
     */
    public async eventsDistrict(district: FRC.DistrictCode | string) {
        return this.stat(`events/district/${district}`)
            .then((res) => res.json() as Promise<StatEvent[]>);
    }

    /**
     * /v2/events/state/{state}
     * @param state state that the events are in - can use `FRC.State` enum
     * @param year optional year of the requested season
     * @returns Get a list of Event objects for a single state
     */
    public async eventsState(state: FRC.States | string, year?: number) {
        return this.stat(`events/state/${state}`)
            .then((res) => res.json() as Promise<StatEvent[]>);
    }

    /**
     * /v2/events
     * @param options all may be left unfilled - any contradictions will cause nothing to be returned
     * @param options.year year the of requested season
     * @param options.country country that the events are in
     * @param options.district district that the events are in - can use `FRC.DistrictCode` enum
     * @param options.state state the events are in (if in the USA) - can use `FRC.States` enum
     * @param options.week week the events take place in
     * @param options.offseason whether or not the events are an offseason event
     * @param options.ascending from what i can tell this does nothing? - default false
     * @param options.limit amount of teams that should be returned - default 100
     * @param options.offset how far the `limit` "window" should be moved down
     * @returns Get a list of all Event objects with optional filters
     */
    public async events(options?: {
        year?: number,
        country?: string,
        district?: FRC.DistrictCode | string,
        state?: FRC.States | string,
        type?: number,
        week?: number,
        offseason?: boolean,
        metric?: string,
        ascending?: boolean,
        limit?: number,
        offset?: number
    }) {
        return this.stat("events")
            .then((res) => res.json() as Promise<StatEvent[]>);
    }

    /************************** END OF Statbotics REST API Wrappers **************************/
}