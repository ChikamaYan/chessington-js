const MoveType = Object.freeze({
    DEFAULT: Symbol(),
    LATERAL: Symbol('LATERAL'),
    LATERAL_NONKILL: Symbol('LATERAL that cannot kill'),
    DIAGONAL: Symbol('DIAGONAL'),
    KNIGHT: Symbol('KNIGHT'),
    KILL: Symbol('kill'),
    EN_PASSANT: Symbol('en passant'),
});

export default MoveType;
