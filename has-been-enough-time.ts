const timeTracker: { lastTime: Date | null } = { lastTime: null };

export const hasBeenEnoughTime = (enoughTime: number) => { // milliseconds
	const now = new Date();

	if (!timeTracker.lastTime) {
		timeTracker.lastTime = now;
		return true;
	}

	const timeDifference =
		now.getTime() - timeTracker.lastTime.getTime() >= enoughTime;

	if (!timeDifference) {
		return false;
	}

	timeTracker.lastTime = now;

	return true;
};

export const getLastTime = () => {
	return timeTracker.lastTime;
};
