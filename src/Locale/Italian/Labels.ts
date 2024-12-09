import { LabelRegistry } from "../Registry";

export const LABELS_ITALIAN: LabelRegistry = {

    LobbyState: {
        waiting:                "In attesa",
        playing:                "In gioco",
        finished:               "Partita finita"
    },

    GameOptions: {
        expansions:             "Espansioni",
        character_choice:       "Scelta Dei Personaggi",
        enable_ghost_cards:     "Abilita Carte Fantasma",
        quick_discard_all:      "Scarta Tutto Veloce",
        auto_pick_predraw:      "Scelta automatica estrazione",
        allow_bot_rejoin:       "Permetti Controllo Bot",
        scenario_deck_size:     "Carte Scenario",
        num_bots:               "Numero di Bot",
        damage_timer:           "Timer Danno",
        escape_timer:           "Timer Fuga",
        bot_play_timer:         "Timer Giocata Bot",
        tumbleweed_timer:       "Timer Cespuglio",
        game_seed:              "Seed di Gioco",
    },

    GameOptionsTooltip: {
        character_choice:       "Abilita la scelta su due personaggi prima dell'inizio della partita.",
        enable_ghost_cards:     "Abilita le carte che possono riportare in gioco i giocatori eliminati.",
        quick_discard_all:      "Risolvi automaticamente azioni dove il giocatore deve scartare tutte le carte.",
        auto_pick_predraw:      "Scegli automaticamente per quale carta estrarre prima della fase 1 del turno.",
        allow_bot_rejoin:       "Permetti agli altri giocatori di prendere controllo dei bot.",
        scenario_deck_size:     "I mazzi di High Noon e Fistful of Cards vengono mischiati assieme in un mazzetto di questa dimensione.",
        num_bots:               "Numero di bot per questa partita.",
        damage_timer:           "Timer (in ms) per permettere di giocare carte come Salvo!, quando qualcuno prende danno.",
        escape_timer:           "Timer (in ms) per permettere di giocare Fuga, prima che l'azione si risolva automaticamente.",
        bot_play_timer:         "Timer (in ms) per controllare la velocità di gioco dei bot.",
        tumbleweed_timer:       "Timer (in ms) per permettere di giocare Cespuglio, prima che l'estrazione si risolva automaticamente. (Imposta a 0 per disattivare)",
        game_seed:              "Seme per il generatore di numeri casuali. (Imposta a 0 per usare un valore casuale)"
    },

    ExpansionType: {
        thebullet:              "Dynamite Box",
        dodgecity:              "Dodge City",
        valleyofshadows:        "Valley Of Shadows",
        udolistinu:             "Valley Of Shadows (versione originale)",
        greattrainrobbery:      "The Great Train Robbery",
        wildwestshow:           "Wild West Show",
        goldrush:               "Gold Rush",
        armedanddangerous:      "Armed & Dangerous",
        highnoon:               "High Noon",
        fistfulofcards:         "A Fistful of Cards",
        legends:                "Legends",
        canyondiablo:           "Canyon Diablo",
    },

    PlayerRole: {
        unknwown:               "(Ruolo sconosciuto)",
        sheriff:                "Sceriffo",
        deputy:                 "Vice",
        outlaw:                 "Fuorilegge",
        renegade:               "Rinnegato",
        deputy_3p:              "Vice",
        outlaw_3p:              "Fuorilegge",
        renegade_3p:            "Rinnegato"
    },

    ui: {
        APP_TITLE: "Bang!",
        APP_WELCOME: "Benvenuto in bang.salvoserver.it,\nBang! online con tutte le espansioni!\nGioca gratis adesso con i tuoi amici!",
        DISCORD_LINK: "Entra nel discord ufficiale",
        DONATE_PAYPAL: "Fai una donazione",
        LOADING: "Caricamento...",
        RECONNECTING: "Riconnessione...", 
        UNKNOWN_CARD: "(Carta sconosciuta)",
        UNKNOWN_PLAYER: "(Giocatore sconosciuto)",
        USERNAME_EMPTY: "(Nome utente vuoto)",
        STATUS_GAME_OVER: "Partita Finita",
        LABEL_USERNAME: "Nome Utente",
        LABEL_LOBBY_NAME: "Nome Lobby",
        LABEL_LOBBY_PASSWORD: "Password",
        PROMPT_LOBBY_PASSWORD: "Inserisci la password della lobby",
        GAME_OPTIONS: "Opzioni di Partita",
        BUTTON_CHAT_SEND: "Invia",
        BUTTON_START_GAME: "Avvia Partita",
        BUTTON_SPECTATE_ON: "Unisciti come spettatore",
        BUTTON_SPECTATE_OFF: "Unisciti come giocatore",
        BUTTON_ENABLE_SOUNDS: "Abilita Souni",
        BUTTON_DISABLE_SOUNDS: "Disabilita Suoni",
        BUTTON_RETURN_LOBBY: "Ritorna alla Lobby",
        BUTTON_OK: "OK",
        BUTTON_UNDO: "Annulla",
        BUTTON_YES: "Sì",
        BUTTON_NO: "No",
        BUTTON_PLAY: "Gioca",
        BUTTON_PICK: "Scarta",
        BUTTON_CONNECT: "Connetti",
        BUTTON_JOIN: "Entra",
        BUTTON_CREATE_LOBBY: "Crea Lobby",
        BUTTON_LEAVE_LOBBY: "Esci dalla Lobby",
        BUTTON_DISCONNECT: "Disconnetti",
        BUTTON_REJOIN: "Rientra",
    },

    lobby: {
        CONNECTION_ERROR: "Errore di connessione",
        ERROR_INVALID_LOBBY: "ID lobby non valido",
        ERROR_PLAYER_IN_LOBBY: "Giocatore già in una lobby",
        ERROR_PLAYER_NOT_IN_LOBBY: "Giocatore non in una lobby",
        ERROR_PLAYER_NOT_LOBBY_OWNER: "Non proprietario della lobby",
        ERROR_USER_NOT_CONTROLLING_PLAYER: "Giocatore non in gioco",
        ERROR_NOT_ENOUGH_PLAYERS: "Non ci sono abbastanza giocatori",
        ERROR_TOO_MANY_PLAYERS: "Ci sono troppi giocatori",
        ERROR_LOBBY_NOT_WAITING: "Lobby non in attesa",
        ERROR_LOBBY_NOT_PLAYING: "Lobby non in gioco",
        ERROR_LOBBY_NOT_FINISHED: "Lobby non in partita finita",
        ERROR_PASSWORD_INCORRECT: "Password non corretta",
        ERROR_GAME_CHEATS_NOT_ENABLED: "I trucchi non sono abilitati",
        INVALID_COMMAND_NAME: "Comando non valido",
    },

    chat: {
        HELP_DESCRIPTION: cmd => `${cmd} : visualizza questo messaggio`,
        USERS_DESCRIPTION: cmd => `${cmd} : visualizza la lista di tutti gli utenti in questa lobby`,
        KICK_DESCRIPTION: cmd => `${cmd} nome_utente_o_id : caccia un utente da questa lobby`,
        MUTE_DESCRIPTION: cmd => `${cmd} nome_utente_o_id : muta un utente in questa lobby`,
        UNMUTE_DESCRIPTION: cmd => `${cmd} nome_utente_o_id : smuta un utente in questa lobby`,
        APPOINT_DESCRIPTION: cmd => `${cmd} nome_utente_o_id : cedi la proprietà di questa lobby`,
        GET_OPTIONS_DESCRIPTION: cmd => `${cmd} : visualizza le opzioni di gioco`,
        SET_OPTION_DESCRIPTION: cmd => `${cmd} name value : modifica un'opzione di gioco`,
        RESET_OPTIONS_DESCRIPTION: cmd => `${cmd} : resetta le opzioni di gioco`,
        GIVE_CARD_DESCRIPTION: cmd => `${cmd} card_name : prendi una carta`,
        GET_RNG_SEED_DESCRIPTION: cmd => `${cmd} : visualizza il seed di gioco (solo durante schermata di partita finita)`,
        QUIT_DESCRIPTION: cmd => `${cmd} : disconnettiti dal server`,
        
        GAME_SEED: seed => `Il seed di gioco è ${seed}`,
        
        USER_JOINED_LOBBY: (username) => `${username} entra in lobby`,
        USER_LEFT_LOBBY: (username) => `${username} esce dalla lobby`,
    },

    server: {
        ERROR_CANNOT_CONNECT_TO_SERVER: "Impossibile connettersi al server",
        ERROR_DISCONNECTED_FROM_SERVER: "Disconnessione dal server",
        SERVER_STOP: "Il server è stato chiuso. Attendere qualche minuto e riprovare.",
        HANDSHAKE_FAIL: "Errore durante la connessione",
        RECONNECT_WITH_SAME_SESSION_ID: "La sessione è stata trasferita",
        INACTIVITY: "Disconnessione per inattività",
        QUIT: "Disconnessione da comando utente",
        ERROR_CODE: code => `(Codice errore: ${code})`,
    },

};