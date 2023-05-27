pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyERC721Token is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    mapping(uint256 => string) private _tokenURIs;
    mapping(address => uint256[]) private _ownedTokens;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    function mintNFT(address to, string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();

        uint256 newTokenId = _tokenIds.current();
        _safeMint(to, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        _ownedTokens[to].push(newTokenId);

        return newTokenId;
    }

    function _setTokenURI(uint256 tokenId, string memory tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = tokenURI;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return _tokenURIs[tokenId];
    }

    function transferNFT(address from, address to, uint256 tokenId) public {
        require(_isApprovedOrOwner(msg.sender, tokenId), "You are not the owner or approved to transfer this token");
        _transfer(from, to, tokenId);
        _updateOwnedTokens(from, to, tokenId);
    }

    function getOwnedTokens(address owner) public view returns (uint256[] memory, string[] memory) {
    uint256[] storage tokenIds = _ownedTokens[owner];
    string[] memory tokenURIs = new string[](tokenIds.length);

    for (uint256 i = 0; i < tokenIds.length; i++) {
        uint256 tokenId = tokenIds[i];
        tokenURIs[i] = _tokenURIs[tokenId];
    }

    return (tokenIds, tokenURIs);
}

    function _updateOwnedTokens(address from, address to, uint256 tokenId) internal {
        uint256[] storage fromTokens = _ownedTokens[from];
        uint256[] storage toTokens = _ownedTokens[to];

        uint256 tokenIndex = _indexOfToken(fromTokens, tokenId);
        if (tokenIndex < fromTokens.length - 1) {
            uint256 lastTokenId = fromTokens[fromTokens.length - 1];
            fromTokens[tokenIndex] = lastTokenId;
        }
        fromTokens.pop();

        toTokens.push(tokenId);
    }

    function _indexOfToken(uint256[] memory tokens, uint256 tokenId) internal pure returns (uint256) {
        for (uint256 i = 0; i < tokens.length; i++) {
            if (tokens[i] == tokenId) {
                return i;
            }
        }
        revert("Token not found");
    }
}
