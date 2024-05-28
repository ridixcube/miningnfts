# miningnfts
# NFT Minting and Listing Application

This repository contains a simple JavaScript application for minting and listing Non-Fungible Tokens (NFTs). The application allows users to mint NFTs by providing metadata and subsequently lists all minted NFTs along with a count of the total supply.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Functions](#functions)
  - [mintNFT](#mintnft)
  - [listNFTs](#listnfts)
  - [getTotalSupply](#gettotalsupply)

## Introduction

This application demonstrates the basic functionality of minting and listing NFTs with custom metadata. It includes three main functions: `mintNFT`, `listNFTs`, and `getTotalSupply`.


## Usage

The application defines a variable to store NFT metadata, provides a function to mint NFTs, lists all minted NFTs, and displays the total number of NFTs minted.

To use the application, follow these steps:

1. Mint NFTs by calling the `mintNFT` function with the desired metadata.
2. List all NFTs by calling the `listNFTs` function.
3. Get the total supply of minted NFTs by calling the `getTotalSupply` function.

## Functions

### mintNFT

This function takes metadata parameters and creates an NFT object. The NFT is then stored in the `detailsNFT` array.

**Parameters:**
- `name` (string): The name of the NFT owner.
- `shoeSize` (number): The shoe size associated with the NFT.
- `favColor` (string): The favourite colour associated with the NFT.
- `bling` (string): The bling attribute of the NFT.


### listNFTs

This function loops through the `detailsNFT` array and prints the metadata of each NFT to the console.
listNFTs();
```

### getTotalSupply
This function returns the total number of NFTs minted by printing the length of the `detailsNFT` array to the console.
getTotalSupply();
---
