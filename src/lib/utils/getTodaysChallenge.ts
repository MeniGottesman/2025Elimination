const rules = {
    20: 'Elimination Sign Up is open until Sunday, 11:59 PM',
    21: 'Elimination Sign Up is open until Sunday, 11:59 PM',
    22: 'Elimination Sign Up is open until Sunday, 11:59 PM',
    23: 'Plushie Handouts @ Senior Quad, Lunch & Elimination Sign Up is open until Sunday, 11:59 PM',
    24: 'Plushie Handouts @ Senior Quad, Lunch & Elimination Sign Up is open until Sunday, 11:59 PM',
    25: 'Elimination Sign Up is open until Sunday, 11:59 PM',
    26: 'Targets Assigned at 11:59 PM (Sign ups close)',
    27: 'GAME STARTS: To stay safe, players must hold the animal with their right hand. Spamming kill codes will result in elimination. Do not attempt to eliminate players during class or in any other prohibited areas. Refer to the rules for more information. If you do not have a target, it means you missed the deadline to sign up with your PAUSD email.',
    28: 'To stay safe, players must be holding the animal with both hands',
    29: 'Targets Change at 10:30 PM: To stay safe, players must be holding animal ABOVE their shoulder',
    30: 'To stay safe, players must be wearing glasses',
    31: 'To stay safe, players must have their shirt visibly, fully tucked in',
    1: '10 PM: Players with less than one elimination are automatically eliminated. Targets Change & On weekends, players must abide by all rules and must carry a plushie to be safe',
    2: 'On weekends, players must abide by all rules and must carry a plushie to be safe',
    3: 'To stay safe, players must be touching a vertical wall (e.g., the side of a building)',
    4: 'To stay safe, players must be wearing monochrome (not black or white, excluding shoes)',
    5: 'Targets Change at 10 PM: To stay safe, players must be wearing JORTS (jean shorts). You CAN roll up regular jeans to be shorts-length (at or above knee level)',
    6: 'To stay safe, players must be wearing a wig',
    7: 'To stay safe, players must be carrying their things in something other than a backpack',
    8: '10 PM: Players with less than two eliminations are automatically eliminated. Targets Change & On weekends, players must abide by all rules and must carry a plushie to be safe',
    9: ' & On weekends, players must abide by all rules and must carry a plushie to be safe. For this week, nobody is safe: there are only requirements for eliminating others',
    10: 'To eliminate others, players must be SITTING OR LAYING DOWN ON THE GROUND',
    11: 'To eliminate others, players must have at least one shoe off',
    12: 'Targets Change at 10 PM: To eliminate others, players must give their target a flower immediately after eliminating them',
    13: 'Weekend rules apply: Players must abide by all rules and must carry a plushie to be safe',
    18: 'NO ONE IS SAFE (can be tagged anytime even with the animal)',
};

export function getTodaysChallenge() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    return rules[day] || 'No challenge for today';
}
