type Event = 'ONE' | 'TWO' | 'THREE';

interface ITimeTracker {
	enoughTime: number;
	lastTime: Date | null;
}

const defaultTimeTracker: ITimeTracker = { enoughTime: 0, lastTime: null };

type TimeForEvent = {
	[event in Event]: ITimeTracker;
};

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const timeTracker: TimeForEvent = {
	ONE: { ...defaultTimeTracker, enoughTime: day },
	TWO: { ...defaultTimeTracker, enoughTime: hour },
	THREE: { ...defaultTimeTracker, enoughTime: minute },
};

export const hasBeenEnoughTime = (event: Event) => {
	const now = new Date();

	const tracker = timeTracker[event];

	if (tracker.lastTime == null || tracker.enoughTime == 0) {
		tracker.lastTime = now;
		return true;
	}

	const timeDifference =
		now.getTime() - tracker.lastTime.getTime() > tracker.enoughTime;

	if (!timeDifference) {
		return false;
	}

	tracker.lastTime = now;

	return true;
};

export const getLastTime = (event: Event) => {
	return timeTracker[event].lastTime;
};

export const setLastTime = (event: Event, lastTime: Date | null) => {
	timeTracker[event].lastTime = lastTime;
};

export const getEnoughTime = (event: Event) => {
	return timeTracker[event].enoughTime;
};

export const setEnoughTime = (event: Event, enoughTime: number) => {
	timeTracker[event].enoughTime = enoughTime;
};
