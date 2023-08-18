import React from 'react';

const ProjectSummary = () => {
    const projects = [
        {
            language: "Rust",
            projects: ["Arbitrum airdrop claimer", "Token tracker", "Liquidity tracker", "Rust EVM template", "NFT Mint backrunner"]
        },
        {
            language: "Solidity",
            projects: ["NFT Mint", "NFT burner", "NFT staking", "Proj4"]
        },
        {
            language: "HUFF",
            projects: ["Rare-skillz Puzzles", "Simple Raffle"]
        },
        {
            language: "Fullstack - Solidity / Typescript",
            projects: ["Skillz Burner"]
        }
    ];

    return (
        <div className="py-5 bg-black">
            <div className='mx-5'>
                <h1 className="text-2xl font-bold text-green">
                    {'>>'}// Projects
                </h1>
                <h2 className="text-xl text-gray-t font-bold pt-4">// Here are all the projects I've worked on</h2>
                <div className="pl-5 pt-6">
                    {projects.map((langGroup, index) => (
                        <div className="underline underline-offset-4" key={index}>
                            <strong >{langGroup.language}</strong>
                            <ul className='list-disc ml-10 mb-3'>
                                {langGroup.projects.map((proj, pIndex) => (
                                    <li className="mb-2" key={pIndex}>{proj}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="inline-block mt-4 relative">
                        <span className="cursor-blink bg-white h-[22px] w-[10px] block ml-[0.25rem] absolute bottom-[-1px]"></span>
                    </div>
                </div>
            </div>
        </div>
      );
      
}

export default ProjectSummary;