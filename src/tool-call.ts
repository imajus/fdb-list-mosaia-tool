import { ethers } from 'ethers';
import NFTFactoryData from './NFTFactory.json';

const RPC_URL = `https://api.calibration.node.glif.io/rpc/v1`;

export default async function toolCall(): Promise<object> {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const contract = new ethers.Contract(
    NFTFactoryData.address,
    NFTFactoryData.abi,
    provider
  );
  const collections = await contract.getActiveCollections();
  return Promise.all(
    collections.map(async (address: string) => {
      const info = await contract.getCollectionInfo(address);
      return {
        address: info.nftContract,
        owner: info.owner,
        name: info.name,
        symbol: info.symbol,
        description: info.description,
        price: Number(ethers.formatEther(info.price)),
        publicColumns: info.publicColumns,
        privateColumns: info.privateColumns,
        createdAt: info.createdAt.toString(),
      };
    })
  );
}
