// src/core/types.ts

// TypeScript interfaces and enums for the calculator-game

// Enum for Game Types
export enum GameType {
    SINGLE_PLAYER = 'single_player',
    MULTI_PLAYER = 'multi_player'
}

// Interface for Player Data
export interface PlayerData {
    id: string;
    name: string;
    health: number;
    level: number;
    experience: number;
    achievements: string[];
}

// Interface for Enemy Data
export interface EnemyData {
    id: string;
    name: string;
    health: number;
    attackPower: number;
    defense: number;
}

// Enum for Combat Actions
export enum CombatAction {
    ATTACK = 'attack',
    DEFEND = 'defend',
    USE_ITEM = 'use_item'
}

// Interface for Battle Results
export interface BattleResult {
    winner: string;
    loot: LootItem[];
}

// Interface for Loot Items
export interface LootItem {
    id: string;
    name: string;
    type: string;
    value: number;
}

// Interface for Game State
export interface GameState {
    players: PlayerData[];
    enemies: EnemyData[];
    currentPlayerIndex: number;
    round: number;
}

// Interface for Game Configurations
export interface GameConfig {
    maxPlayers: number;
    defaultHealth: number;
    startingLevel: number;
}

// Interface for Combo Bonuses
export interface ComboBonus {
    action: CombatAction;
    bonus: number;
}

// Interface for Achievements
export interface Achievement {
    id: string;
    description: string;
    awardedOn: Date;
}

// Interface for Player Progress
export interface PlayerProgress {
    playerId: string;
    achievementsEarned: Achievement[];
    highestLevel: number;
    battlesWon: number;
}
