import { Accordion, AccordionItem, Badge } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
export default function CustomAccordian() {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <Accordion selectionMode="single" variant="splitted" className="max-w-lg" defaultExpandedKeys={["1"]} disabledKeys={["2"]}>
            <AccordionItem key="1" aria-label="Accordion 1" title="Topic 1" defaultChecked subtitle={<span>click to see in detail...</span>} startContent={<Badge content="10" color="secondary"><Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" isBordered color="primary" /></Badge>}>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Topic 1</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis qui illum in aspernatur voluptates, aut repudiandae pariatur minus dignissimos corporis. Sapiente sunt, dolorum repellat voluptatem et dolorem consequatur ad.</p>
                    <h3 className="font-bold text-lg">Topic 1</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis qui illum in aspernatur voluptates, aut repudiandae pariatur minus dignissimos corporis. Sapiente sunt, dolorum repellat voluptatem et dolorem consequatur ad.</p>
                    <h3 className="font-bold text-lg">Topic 1</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis qui illum in aspernatur voluptates, aut repudiandae pariatur minus dignissimos corporis. Sapiente sunt, dolorum repellat voluptatem et dolorem consequatur ad.</p>
                    <h3 className="font-bold text-lg">Topic 1</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis qui illum in aspernatur voluptates, aut repudiandae pariatur minus dignissimos corporis. Sapiente sunt, dolorum repellat voluptatem et dolorem consequatur ad.</p>
                    <h3 className="font-bold text-lg">Topic 1</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis qui illum in aspernatur voluptates, aut repudiandae pariatur minus dignissimos corporis. Sapiente sunt, dolorum repellat voluptatem et dolorem consequatur ad.</p>
                    <h3 className="font-bold text-lg">Topic 1</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis qui illum in aspernatur voluptates, aut repudiandae pariatur minus dignissimos corporis. Sapiente sunt, dolorum repellat voluptatem et dolorem consequatur ad.</p>
                    <h3 className="font-bold text-lg">Topic 1</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis qui illum in aspernatur voluptates, aut repudiandae pariatur minus dignissimos corporis. Sapiente sunt, dolorum repellat voluptatem et dolorem consequatur ad.</p>
                    <h3 className="font-bold text-lg">Topic 1</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis qui illum in aspernatur voluptates, aut repudiandae pariatur minus dignissimos corporis. Sapiente sunt, dolorum repellat voluptatem et dolorem consequatur ad.</p>
                    <h3 className="font-bold text-lg">Topic 1</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis qui illum in aspernatur voluptates, aut repudiandae pariatur minus dignissimos corporis. Sapiente sunt, dolorum repellat voluptatem et dolorem consequatur ad.</p>
                    <h3 className="font-bold text-lg">Topic 1</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis qui illum in aspernatur voluptates, aut repudiandae pariatur minus dignissimos corporis. Sapiente sunt, dolorum repellat voluptatem et dolorem consequatur ad.</p>
                </div>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Topic 2">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Topic 3">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 4" title="Topic 4">
                {defaultContent}
            </AccordionItem>
        </Accordion>
    );
}