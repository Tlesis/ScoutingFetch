interface StatYear {
    year:               number;
    epa_max:            number;
    epa_1p:             number;
    epa_5p:             number;
    epa_10p:            number;
    epa_25p:            number;
    epa_median:         number;
    epa_75p:            number;
    epa_mean:           number;
    epa_sd:             number;
    auto_epa_max:       number;
    auto_epa_1p:        number;
    auto_epa_5p:        number;
    auto_epa_10p:       number;
    auto_epa_25p:       number;
    auto_epa_median:    number;
    auto_epa_75p:       number;
    auto_epa_mean:      number;
    auto_epa_sd:        number;
    teleop_epa_max:     number;
    teleop_epa_1p:      number;
    teleop_epa_5p:      number;
    teleop_epa_10p:     number;
    teleop_epa_25p:     number;
    teleop_epa_median:  number;
    teleop_epa_75p:     number;
    teleop_epa_mean:    number;
    teleop_epa_sd:      number;
    endgame_epa_max:    number;
    endgame_epa_1p:     number;
    endgame_epa_5p:     number;
    endgame_epa_10p:    number;
    endgame_epa_25p:    number;
    endgame_epa_median: number;
    endgame_epa_75p:    number;
    endgame_epa_mean:   number;
    endgame_epa_sd:     number;
    rp_1_epa_max:       number;
    rp_1_epa_1p:        number;
    rp_1_epa_5p:        number;
    rp_1_epa_10p:       number;
    rp_1_epa_25p:       number;
    rp_1_epa_median:    number;
    rp_1_epa_75p:       number;
    rp_1_epa_mean:      number;
    rp_1_epa_sd:        number;
    rp_2_epa_max:       number;
    rp_2_epa_1p:        number;
    rp_2_epa_5p:        number;
    rp_2_epa_10p:       number;
    rp_2_epa_25p:       number;
    rp_2_epa_median:    number;
    rp_2_epa_75p:       number;
    rp_2_epa_mean:      number;
    rp_2_epa_sd:        number;
    epa_quals_acc:      number;
    epa_quals_mse:      number;
    quals_count:        number;
    epa_elims_acc:      number;
    epa_elims_mse:      number;
    elims_count:        number;
    epa_champs_acc:     number;
    epa_champs_mse:     number;
    champs_count:       number;
    epa_acc:            number;
    epa_mse:            number;
    count:              number;
    rp_1_acc:           number;
    rp_1_mse:           number;
    rp_1_champs_acc:    number;
    rp_1_champs_mse:    number;
    rp_2_acc:           number;
    rp_2_mse:           number;
    rp_2_champs_acc:    number;
    rp_2_champs_mse:    number;
    rp_champs_count:    number;
    rp_count:           number;
    score_mean:         number;
    score_sd:           number;
    auto_mean:          number;
    teleop_mean:        number;
    endgame_mean:       number;
    fouls_mean:         number;
    no_fouls_mean:      number;
    rp_1_mean:          number;
    rp_2_mean:          number;
}
/****************************************/
interface StatTeam {
    team:            number;
    name:            string;
    offseason:       boolean;
    state:           null | string;
    country:         string | null;
    district:        null | string;
    rookie_year:     number | null;
    active:          boolean;
    norm_epa:        number | null;
    norm_epa_recent: number | null;
    norm_epa_mean:   number | null;
    norm_epa_max:    number | null;
    wins:            number;
    losses:          number;
    ties:            number;
    count:           number;
    winrate:         number;
    full_wins:       number;
    full_losses:     number;
    full_ties:       number;
    full_count:      number;
    full_winrate:    number;
}
/****************************************/
interface StatTeamYear {
    year:                    number;
    team:                    number;
    offseason:               boolean;
    name:                    string;
    state:                   string;
    country:                 string;
    district:                string | null;
    is_competing:            boolean;
    epa_start:               number;
    epa_pre_champs:          number;
    epa_end:                 number;
    epa_mean:                number;
    epa_max:                 number;
    epa_diff:                number;
    auto_epa_start:          number;
    auto_epa_pre_champs:     number;
    auto_epa_end:            number;
    auto_epa_mean:           number;
    auto_epa_max:            number;
    teleop_epa_start:        number;
    teleop_epa_pre_champs:   number;
    teleop_epa_end:          number;
    teleop_epa_mean:         number;
    teleop_epa_max:          number;
    endgame_epa_start:       number;
    endgame_epa_pre_champs:  number;
    endgame_epa_end:         number;
    endgame_epa_mean:        number;
    endgame_epa_max:         number;
    rp_1_epa_start:          number;
    rp_1_epa_pre_champs:     number;
    rp_1_epa_end:            number;
    rp_1_epa_mean:           number;
    rp_1_epa_max:            number;
    rp_2_epa_start:          number;
    rp_2_epa_pre_champs:     number;
    rp_2_epa_end:            number;
    rp_2_epa_mean:           number;
    rp_2_epa_max:            number;
    unitless_epa_end:        number;
    norm_epa_end:            number;
    wins:                    number;
    losses:                  number;
    ties:                    number;
    count:                   number;
    winrate:                 number;
    full_wins:               number;
    full_losses:             number;
    full_ties:               number;
    full_count:              number;
    full_winrate:            number;
    total_epa_rank:          number;
    total_epa_percentile:    number;
    total_team_count:        number;
    country_epa_rank:        number;
    country_epa_percentile:  number;
    country_team_count:      number;
    state_epa_rank:          number;
    state_epa_percentile:    number;
    state_team_count:        number;
    district_epa_rank:       number | null;
    district_epa_percentile: number | null;
    district_team_count:     number | null;
}
/****************************************/