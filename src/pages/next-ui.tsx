import { Avatar, CircularProgress, Card, CardBody, CardFooter, Image, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Checkbox, CheckboxGroup, Code, Divider, Pagination, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
// import CustomAccordian from "../components/accordian";
import { FcLike } from 'react-icons/fc'

function NextUIPage() {
    const [progress, setProgress] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    console.log({ currentPage })
    const images = ["https://images.unsplash.com/photo-1695754189866-f2f8eae7328d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80", "https://plus.unsplash.com/premium_photo-1695305001370-37fff8656266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80", "https://images.unsplash.com/photo-1695754189866-f2f8eae7328d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80", "https://images.unsplash.com/photo-1695754189866-f2f8eae7328d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80", "https://images.unsplash.com/photo-1695754189866-f2f8eae7328d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"] as const;
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setProgress(prevProgress => prevProgress + 2)
    //         if (progress >= 100) clearInterval(interval);
    //     }, 100)
    //     return () => clearInterval(interval)
    // }, [])

    console.log({ progress });



    return <div className="flex flex-col gap-20 p-10">
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
        <div className="w-[200px]"><Card
            isFooterBlurred
            radius="lg"
            className="border-none"
        >
            <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                    Notify me
                </Button>
            </CardFooter>
        </Card></div>
        <div className="flex flex-col gap-5">
            <div><Checkbox radius="full" icon={<FcLike />}>Accept</Checkbox> </div>
        </div>
        <div>
            <CheckboxGroup
                label="Select cities"
                color="secondary"
            // defaultValue={["buenos-aires", "london"]}
            // isInvalid={true}
            >
                <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                <Checkbox value="sydney" color="success">Sydney</Checkbox>
                <Checkbox value="san-francisco" color="default">San Francisco</Checkbox>
                <Checkbox value="london" color="primary">London</Checkbox>
                <Checkbox value="tokyo" color="danger">Tokyo</Checkbox>
            </CheckboxGroup>
            <Divider className="my-5 max-w-[500px]" />
            <Code>npm install @nextui-org/react</Code>
        </div>
        <Divider className="my-10" />
        <div><Dropdown className="w-[200px]">
            <DropdownTrigger>
                <Button
                    variant="bordered"
                >
                    Open Menu
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem key="delete" className="text-danger" color="danger">
                    Delete file
                </DropdownItem>
            </DropdownMenu>
        </Dropdown></div>
        <div>
            <Image src={images[currentPage]} isZoomed width={300} height={500} />
            <Pagination page={currentPage} onChange={setCurrentPage} color="secondary" total={images.length} initialPage={1} showControls showShadow />
        </div>
        <div> <Card className="w-[200px] space-y-5 p-4" radius="lg">
            <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="w-[100px] rounded-md">
                    <div className="h-[24px]"></div>
                </Skeleton>
            </div>
        </Card></div>
    </div>

}

export default NextUIPage;