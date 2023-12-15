"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import {
  ArrowRightOutlined,
  PauseOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import { useIsMounted } from "@/hooks/useIsMounted";

import Solidproof from "@/assets/solidproof.png";
import Dextools from "@/assets/dextools.png";
import Uniswap from "@/assets/uniswap.png";

import "./style.css";
import { PoweredIcon } from "@/utils/Icons/powered";

interface Props {}

// const contractAddress = "0x016c4225ae87FEC52A5230158fb9dF7f93B87921";
// const pairAddress = "0x1e053b6d2f0a578505bfd8bfe344295a9a08bbd2";

const Home: React.FC<Props> = () => {
  // const [isVisionVisible, setIsVisionVisible] = useState(false);
  // const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);

  // const visionRef = useRef<HTMLDivElement | null>(null);
  // const featuresRef = useRef<HTMLDivElement | null>(null);

  const isMounted = useIsMounted();

  // useEffect(() => {
  //   if (isMounted) {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setIsVisionVisible(entry.isIntersecting);
  //     });

  //     observer.observe(visionRef.current as HTMLDivElement);
  //   }
  // }, [isMounted]);

  // useEffect(() => {
  //   if (isMounted) {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setIsFeaturesVisible(entry.isIntersecting);
  //     });

  //     observer.observe(featuresRef.current as HTMLDivElement);
  //   }
  // }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="homepage-container">
      <div id="welcome" className="h-6" />
      <div className="w-full sm:px-8 lg:px-14">
        <div className="w-full xl:w-4/5 text-center mx-auto text-md xs:text-lg lg:text-xl font-bold text-slate-400 py-6 lg:px-8">
          <div
            className={`w-3 h-3 p-2 inline-block rounded-full bg-celestial-aura mx-2 my-auto`}
          />
          Introducing <span className="text-secondary">Twister Cash</span>, a
          groundbreaking project that reshapes your transactions with
          unprecedented innovation.
        </div>
        <div className="w-full text-center mx-auto text-xl xs:text-2xl md:text-3xl lg:text-4xl font-bold text-white py-4 lg:py-2">
          Empowering Transactions with Decentralized Ingenuity
        </div>
        <div className="w-full xl:w-4/5 text-center mx-auto text-md xs:text-lg lg:text-xl font-bold text-slate-400 py-6 lg:px-8">
          Twister stands as a beacon of privacy and security, offering a robust
          solution that ensures the safety of your transactions. With features
          like a crypto mixer, audit tools, and a revenue-sharing mechanism,
          <span className="text-secondary mx-1">Twister Cash</span> sets the
          standard for secure, confidential, and lucrative transactions.
        </div>

        <div className="w-full xl:w-4/5 flex flex-wrap justify-evenly sm:justify-center mx-auto text-md xs:text-lg lg:text-xl font-bold text-slate-400 pt-2 pb-4">
          <Button className="w-32 text-white bg-night-sky hover:bg-twilight-horizon active:bg-twilight-horizon focus:bg-twilight-horizon">
            Launch dApp
          </Button>

          <Button
            className="w-32 text-white sm:ml-5"
            colorScheme="whiteAlpha"
            rightIcon={<ArrowRightOutlined />}
          >
            Whitepaper
          </Button>
        </div>
      </div>

      {/* <div className="h-20 lg:h-24" />
      <div className="w-full sm:w-3/4 flex flex-wrap justify-between items-center relative px-2 mx-auto">
        <Link
          href={`https://app.uniswap.org/tokens/ethereum/${contractAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-[30%] my-2 sm:my-0 h-16"
        >
          <Image
            src={Uniswap}
            alt="uniswap"
            className="object-contain w-full h-full"
          />
        </Link>
        <Link
          href="https://app.solidproof.io/projects/ventura"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-[30%] mb-2 sm:mb-0 h-16"
        >
          <Image
            src={Solidproof}
            alt="solidproof"
            className="object-contain w-full h-full"
          />
        </Link>
        <Link
          href={`http://dextools.io/app/ether/pair-explorer/${pairAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-[30%] my-2 sm:my-0 h-[20vw] xs:h-[15vw] sm:h-full"
        >
          <Image
            src={Dextools}
            alt="dextools"
            className="object-contain w-full h-full"
          />
        </Link>
      </div> */}

      <div id="features" className="h-20 sm:h-24" />
      <div className="w-full xl:w-4/5 mx-auto sm:px-8 lg:px-14 py-4">
        <div className="text-md xs:text-lg lg:text-xl text-white">Features</div>
        <div className="text-lg xs:text-xl lg:text-2xl mb-2 font-semibold">
          Key Features of <span className="text-secondary">Twister Cash</span>
        </div>
        <div className="w-full flex flex-wrap justify-between mt-8">
          <Card className="w-full md:w-3/5 text-white bg-app border border-slate-500">
            <CardBody>
              <div className="text-md xs:text-lg lg:text-xl font-bold">
                Fortifying Transaction Privacy
              </div>
              <div className="mt-2">
                {/* Discover Twister Cash's Crypto Mixer, a cutting-edge tool
                ensuring heightened privacy by blending cryptocurrencies
                seamlessly.  */}
                Safeguard your transactions with enhanced anonymity, making your
                transactions virtually untraceable within the Twister Cash
                ecosystem.
              </div>
            </CardBody>
          </Card>
          <Card className="w-full md:w-[35%] text-white bg-app border border-slate-500 mt-6 md:mt-0">
            <CardBody>
              <div className="text-md xs:text-lg lg:text-xl font-bold">
                Ensuring Transaction Integrity
              </div>
              <div className="mt-2">
                {/* Explore Twister Cash's Audit Tools, providing comprehensive
                verification for transaction integrity.  */}
                Verify smart contracts and transactions with precision, ensuring
                transparency and bolstering trust within the Twister Cash
                network.
              </div>
            </CardBody>
          </Card>
        </div>
        <Card className="w-full mt-6 text-white bg-app border border-slate-500">
          <CardBody>
            <div className="text-md xs:text-lg lg:text-xl font-bold">
              Empowering Community Participation
            </div>
            <div className="mt-2">
              {/* Join Twister Cash's Rev Share mechanism, contributing to and
              benefiting from the platform's success.  */}
              Engage in revenue sharing, where your participation actively
              shapes and benefits the Twister Cash community, fostering a
              mutually rewarding ecosystem.
            </div>
          </CardBody>
        </Card>
      </div>

      <div id="roadmap" className="h-20 sm:h-24" />
      <div className="w-full xl:w-4/5 mx-auto sm:px-8 lg:px-14 py-4">
        <div className="text-md xs:text-lg lg:text-xl text-white">Roadmap</div>
        <div className="text-lg xs:text-xl lg:text-2xl mb-2 font-semibold">
          <span className="text-secondary">Twister Cash</span> Roadmap
        </div>
        <div className="w-full flex flex-wrap justify-between mt-8">
          <UnorderedList className="w-full sm:w-[45%] md:w-[29%]">
            <div className="text-lg xs:text-xl lg:text-2xl font-semibold">
              Preparation and Launch
            </div>
            <ListItem>Launch Website</ListItem>
            <ListItem>Prelaunch Marketing</ListItem>
            <ListItem>Prelaunch Audit</ListItem>
            <ListItem>Mixer Goes Live</ListItem>
            <ListItem>Token Launch</ListItem>
          </UnorderedList>
          <UnorderedList className="w-full sm:w-[45%] md:w-[29%] my-4 sm:my-0">
            <div className="text-lg xs:text-xl lg:text-2xl font-semibold">
              Expansion
            </div>
            <ListItem>Expand Mixer Ecosystem</ListItem>
            <ListItem>Giving Information About New Utility</ListItem>
            <ListItem>Release New Utility</ListItem>
            <ListItem>More Marketing and Partnership</ListItem>
          </UnorderedList>
          <UnorderedList className="w-full sm:w-[45%] md:w-[29%] sm:mt-4 md:mt-0">
            <div className="text-lg xs:text-xl lg:text-2xl font-semibold">
              Final Plan and Growth
            </div>
            <ListItem>Add More Cryptocurrency Pairs</ListItem>
            <ListItem>More Development on Mixer Ecosystem</ListItem>
            <ListItem>Additional CEX Listings</ListItem>
            <ListItem>TBA</ListItem>
          </UnorderedList>
        </div>
      </div>

      <div id="tokens" className="h-20 sm:h-24" />
      <div className="w-full xl:w-4/5 mx-auto sm:px-8 lg:px-14 py-4">
        <div className="text-md xs:text-lg lg:text-xl text-white">Tokens</div>
        <div className="text-lg xs:text-xl lg:text-2xl mb-2 font-semibold">
          Tokens of <span className="text-secondary">Twister Cash</span>
        </div>
        <div className="w-full h-auto flex flex-wrap justify-center text-center items-center mt-8 lg:mt-0">
          <div className="w-full lg:w-1/2 text-xl xs:text-2xl md:text-3xl lg:text-4xl">
            <div>$TWISTER</div>
            <div className="my-6">TWISTER CASH</div>
            <div>CA :</div>
          </div>
          <Divider className="my-2 lg:hidden" />
          <div className="w-full h-full flex flex-col justify-between lg:w-1/2 text-lg xs:text-xl md:text-2xl lg:text-4xl">
            <div className="flex flex-col py-1">
              <div>100.000.000</div>
              <div className="mt-2">Total Supply</div>
            </div>
            <Divider className="my-1" />
            <div className="flex flex-col py-1">
              <div>5%</div>
              <div className="mt-2">Buy/Sell Tax</div>
            </div>
            <Divider className="my-1" />
            <div className="flex flex-col py-1">
              <div>90%</div>
              <div className="mt-2">LP</div>
            </div>
            <Divider className="my-1" />
            <div className="flex flex-col py-1">
              <div>5%</div>
              <div className="mt-2">Partnership</div>
            </div>
            <Divider className="my-1" />
            <div className="flex flex-col py-1">
              <div>5%</div>
              <div className="mt-2">CEX</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// Ventura Chain, a transformative force in the digital landscape, redefines societal transactions by simplifying asset tokenization. Rooted in decentralization, transparency, and inclusivity, Ventura envisions a future where coding expertise is unnecessary for users to engage with its innovative blockchain platform
