"use client";

import { useState } from "react";
import { SlidingNumber } from "../../components/motion-primitives/sliding-number";

const Clock = () => {
	const [hours, setHours] = useState(parseInt("00"));
	const [minute, setMinute] = useState(parseInt("00"));
	const [secoend, setSecoend] = useState(parseInt("00"));
	const [ampm, setAmpm] = useState("XX");

	return (
		<section>
			<div className="grid h-55 w-90 place-items-center rounded-[1.4rem] bg-[#cce8ff29] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35),inset_1.8px_3px_0_-2px_rgba(255,255,255,0.9),inset_-2px_-2px_0_-2px_rgba(255,255,255,0.8),inset_-3px_-8px_1px_-6px_rgba(255,255,255,0.6),inset_-0.3px_-1px_4px_0_rgba(21,49,77,0.14),inset_-1.5px_2.5px_0_-2px_rgba(21,49,77,0.22),inset_0px_3px_4px_-2px_rgba(21,49,77,0.22),inset_2px_-6.5px_1px_-4px_rgba(21,49,77,0.12),0px_1px_5px_0px_rgba(21,49,77,0.12),0px_6px_16px_0px_rgba(21,49,77,0.1)] backdrop-blur-[10px] backdrop-saturate-185">
				<div className="flex h-full items-center justify-center">
					<div className="flex h-full items-center justify-center">
						<SlidingNumber value={15} />
						<span>:</span>
						<SlidingNumber value={10} />
						<span>:</span>
						<SlidingNumber value={10} />

						<div className="">AM</div>
					</div>
					<div className=""></div>
				</div>
			</div>
		</section>
	);
};

export default Clock;
