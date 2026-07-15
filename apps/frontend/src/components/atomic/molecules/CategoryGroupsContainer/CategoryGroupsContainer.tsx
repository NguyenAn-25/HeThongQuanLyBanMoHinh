import { CategoryGroup, type CategoryGroupProps } from "../CategoryGroup/CategoryGroup"

interface CategoryGroupsContainerProps {
    categoryGroups: CategoryGroupProps[]
}

export function CategoryGroupsContainer({ categoryGroups }: CategoryGroupsContainerProps) {
    return (
        <div className="w-full flex overflow-auto sm:grid sm:grid-cols-12 gap-px border border-border-main bg-border-main">
            {
                categoryGroups.map((categoryGroup, index) => (
                    <div className="w-80 shrink-0 sm:w-full sm:col-span-6 lg:col-span-3">
                        <CategoryGroup
                            key={index}
                            className=" hover:shadow-gray-200 hover:shadow-[0_-1px_8px] hover:z-5 transition-all duration-300"
                            {...categoryGroup}
                        />
                    </div>
                ))
            }
        </div>
    )
}