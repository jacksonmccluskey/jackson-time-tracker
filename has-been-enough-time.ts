export type EventCategory = 'A' | 'B' | 'C' | 'D';

export const isValidEventCategory = (
	keyInput: string
): keyInput is EventCategory => {
	return ['A', 'B', 'C', 'D'].includes(keyInput);
};

interface ITimeTracker {
	enoughTime: number;
	lastTime: Date | null;
}

const defaultTimeTracker: ITimeTracker = { enoughTime: 0, lastTime: null };

type TimeForEvent = {
	[event in EventCategory]: ITimeTracker;
};

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const timeTracker: TimeForEvent = {
	A: { ...defaultTimeTracker, enoughTime: day },
	B: { ...defaultTimeTracker, enoughTime: hour },
	C: { ...defaultTimeTracker, enoughTime: 5 * minute },
	D: { ...defaultTimeTracker, enoughTime: hour },
};

export const getLastTime = (event: EventCategory) => {
	return timeTracker[event].lastTime;
};

export const setLastTime = (event: EventCategory, lastTime: Date | null) => {
	timeTracker[event].lastTime = lastTime;
};

export const getEnoughTime = (event: EventCategory) => {
	return timeTracker[event]?.enoughTime;
};

export const setEnoughTime = (event: EventCategory, enoughTime: number) => {
	timeTracker[event].enoughTime = enoughTime;
};

export const hasBeenEnoughTime = (event: EventCategory) => {
	const now = new Date();

	const lastTime = getLastTime(event);

	const enoughTime = getEnoughTime(event);

	if (lastTime == null || enoughTime == 0) {
		setLastTime(event, now);

		return true;
	}

	const isTimeDifferenceEnough =
		now.getTime() - lastTime.getTime() > enoughTime;

	if (!isTimeDifferenceEnough) {
		return false;
	}

	setLastTime(event, now);

	return true;
};
