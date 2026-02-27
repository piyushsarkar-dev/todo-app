"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import { SlidingNumber } from "../../components/motion-primitives/sliding-number";

const Clock = () => {
	const [hours, setHours] = useState(parseInt("00"));
	const [minute, setMinute] = useState(parseInt("00"));
	const [seceond, setSecond] = useState(parseInt("XX"));
	const [ampm, setAmpm] = useState("XX");
	const [date, setDate] = useState(format(new Date(), "eeee, dd  LLLL yyyy"));

	useEffect(() => {
		const interval = setInterval(() => {
			setHours(parseInt(format(new Date(), "hh")));
			setMinute(parseInt(format(new Date(), "mm")));
			setSecond(parseInt(format(new Date(), "ss")));
			setAmpm(format(new Date(), "a"));
		}, 1000);
	}, []);

	return (
		<section>
			<div className="flex h-55 w-90 flex-col items-center justify-center gap-3 rounded-[1.4rem] bg-[#cce8ff29] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35),inset_1.8px_3px_0_-2px_rgba(255,255,255,0.9),inset_-2px_-2px_0_-2px_rgba(255,255,255,0.8),inset_-3px_-8px_1px_-6px_rgba(255,255,255,0.6),inset_-0.3px_-1px_4px_0_rgba(21,49,77,0.14),inset_-1.5px_2.5px_0_-2px_rgba(21,49,77,0.22),inset_0px_3px_4px_-2px_rgba(21,49,77,0.22),inset_2px_-6.5px_1px_-4px_rgba(21,49,77,0.12),0px_1px_5px_0px_rgba(21,49,77,0.12),0px_6px_16px_0px_rgba(21,49,77,0.1)] backdrop-blur-[10px] backdrop-saturate-185">
				<div className="flex items-center justify-center leading-none">
					<SlidingNumber value={hours} />
					<span>:</span>
					<SlidingNumber value={minute} />
					<span>:</span>
					<SlidingNumber value={seceond} />
					<div>{ampm}</div>
				</div>
				<div>{date}</div>
			</div>
		</section>
	);
};

export default Clock;
