import React from 'react'
import PoolList from './poolList/PoolList'
import ethicon from "../assets/images/pools/eth.png";
import scrollIcon from "../assets/images/scroll.png";

const mockData = [
    {
        tokenAIcon: ethicon,
        tokenBIcon: ethicon,
        statusIcon: scrollIcon,
        tokenAName: 'ETH',
        tokenBName: 'USDT',
        status: 'Status',
        liquidity: '123,123,123',
        apr: '22.9%',
    },
    {
        tokenAIcon: ethicon,
        tokenBIcon: ethicon,
        statusIcon: scrollIcon,
        tokenAName: 'BTC',
        tokenBName: 'USDT',
        status: 'Status',
        liquidity: '234,234,234',
        apr: '33.3%',
    },
    {
        tokenAIcon: ethicon,
        tokenBIcon: ethicon,
        statusIcon: scrollIcon,
        tokenAName: 'BTC',
        tokenBName: 'USDT',
        status: 'Status',
        liquidity: '234,234,234',
        apr: '33.3%',
    },
    {
        tokenAIcon: ethicon,
        tokenBIcon: ethicon,
        statusIcon: scrollIcon,
        tokenAName: 'BTC',
        tokenBName: 'USDT',
        status: 'Status',
        liquidity: '234,234,234',
        apr: '33.3%',
    },
]

const PoolLists = () => {
    return (
        <div id="Switch-body" className="h-full justify-center items-center flex">
            <div className="flex flex-col">
                {mockData.map((data, index) => (
                    <PoolList
                        key={index}
                        tokenAIcon={data.tokenAIcon}
                        tokenBIcon={data.tokenBIcon}
                        statusIcon={data.statusIcon}
                        tokenAName={data.tokenAName}
                        tokenBName={data.tokenBName}
                        status={data.status}
                        liquidity={data.liquidity}
                        apr={data.apr}
                    />
                ))}
            </div>
        </div>
    )
}

export default PoolLists