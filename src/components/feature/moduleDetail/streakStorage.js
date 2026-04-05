let streakCountCache = null;
const completedModuleIds = new Set();

export function getStoredStreakCount(defaultValue = 12) {
  if (streakCountCache === null) {
    streakCountCache = defaultValue;
  }

  return streakCountCache;
}

export function completeModuleAndUpdateStreak(moduleId, defaultValue = 12) {
  if (streakCountCache === null) {
    streakCountCache = defaultValue;
  }

  if (completedModuleIds.has(moduleId)) {
    return {
      alreadyCompleted: true,
      streakCount: streakCountCache,
    };
  }

  completedModuleIds.add(moduleId);
  streakCountCache += 1;

  return {
    alreadyCompleted: false,
    streakCount: streakCountCache,
  };
}

export function resetStreakState(defaultValue = 12) {
  completedModuleIds.clear();
  streakCountCache = defaultValue;
}
