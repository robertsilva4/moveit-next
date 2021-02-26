import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge{}

interface ChallengesContextData{
    level: number;
    challengesCompleted: number;
    currentExperience: number;
    activeChallenge: object;
    levelUp: ()=> void;
    startNewChallenge: ()=> void;
    
}

interface ChallengesProviderProps{
    children: ReactNode ;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children } : ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted ] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    function levelUp() {
      setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengesIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengesIndex];

        setActiveChallenge(challenges)
    }

    return (
        <ChallengesContext.Provider 
        value={{
            level, 
            challengesCompleted, 
            currentExperience,
            activeChallenge, 
            levelUp,
            startNewChallenge
        }}>
            {children}
        </ChallengesContext.Provider>
    );
}