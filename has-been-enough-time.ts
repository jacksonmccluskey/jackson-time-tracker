type Event = 'ONE' | 'TWO' | 'THREE';

interface ITimeTracker {
	lastTime: Date | null;
}

const defaultTimeTracker: ITimeTracker = { lastTime: null };

type TimeForEvent = {
	[event in Event]: ITimeTracker;
};

const timeTracker: TimeForEvent = {
	ONE: defaultTimeTracker,
	TWO: defaultTimeTracker,
	THREE: defaultTimeTracker
};

export const hasBeenEnoughTime = (enoughTime: number, event: Event) => {
	const now = new Date();

	const tracker = timeTracker[event];

	if (tracker.lastTime == null || enoughTime == 0) {
		tracker.lastTime = now;
		return true;
	}

	const timeDifference =
		now.getTime() - tracker.lastTime.getTime() > enoughTime;

	if (!timeDifference) {
		return false;
	}

	tracker.lastTime = now;

	return true;
};

export const getLastTime = (event: Event) => {
	return timeTracker[event].lastTime;
};
