import { CommitmentDetail, Commitment } from "@/utils/constants"
import { Image } from '../../atoms/Image/Image';

export function CommitmentBox() {
    return (
        <div className="w-full flex flex-col p-4 gap-4 rounded-lg border border-gray-light">
            <div
                className="text-lg font-medium"
            >{Commitment}</div>
            <div className="grid grid-cols-2 gap-y-4 xl:flex xl:flex-col xl:gap-4">
                {
                    CommitmentDetail.map((Commitment, index) => (
                        <div className="col-span-1 flex flex-col gap-2" key={index}>
                            <div className="w-full border border-border-main"></div>
                            <div className="flex gap-4 items-center">
                                <div className="w-10">
                                    <Image
                                        publicId={Commitment.publicId}
                                    />
                                </div>
                                <div className="text-base font-light">
                                    {Commitment.text}
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}