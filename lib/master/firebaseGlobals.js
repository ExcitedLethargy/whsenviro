/*Global variables for the WHSEnviro program.*/
/*NB: Variables are stored here as object members, rather than individual variables, to minimise
hassles with regard to variable changes between files. Variable notation will remain to indicate
that these variables are globals, despite the fact that this is slightly unconventional.*/

export var gFirebaseGlobals = {
    gFirebaseConfig: {},
    gFirebaseApp: null,
    gFirestoreDB: null
};