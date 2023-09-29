import { Avatar, CircularProgress, Card, CardBody } from "@nextui-org/react";
import { useEffect, useState } from "react";
// import CustomAccordian from "../components/accordian";


function NextUIPage() {
    const [progress, setProgress] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => prevProgress + 2)
            if (progress >= 100) clearInterval(interval);
        }, 100)
        return () => clearInterval(interval)
    }, [])

    console.log({ progress });



    return <div className="flex flex-col gap-20">
        <div className="flex gap-3 items-center">
            <Avatar size="lg" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar size="sm" name="Junior" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <Avatar name="Jane" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-50 h-50 text-lg" />
            <Avatar name="Joe" isBordered radius="md" color="danger" />
        </div>
        {/* <CustomAccordian /> */}
        {/* <Card className="w-[240px] h-[240px] bg-gradient-to-br from-violet-500 to-fuchsia-500"> */}
        <Card className="w-[240px] h-[240px] rounded-md">
            <CardBody className="justify-center items-center py-0">
                <CircularProgress
                    classNames={{
                        svg: "w-[70px] h-[70px] drop-shadow-lg",
                        indicator: "stroke-blue-400",
                        track: "stroke-blue-500/10", // color /opacity
                        value: "text-3xl font-semibold text-blue-500",
                    }}
                    value={progress}
                    strokeWidth={4}
                // showValueLabel={true}
                />
            </CardBody>
        </Card>
    </div>

}

export default NextUIPage;