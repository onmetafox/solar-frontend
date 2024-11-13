import { Grid, Box, Stack, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextTransition, { presets } from 'react-text-transition';

import solarIcon from "../../assets/logos/solar.svg";
import binanceIcon from "../../assets/logos/binance.svg";
import coinmarkgetIcon from "../../assets/logos/coinmark.svg";
import bitgetIcon from "../../assets/logos/bitget.svg";
import gateIcon from "../../assets/logos/gateio.svg";

import Link from "src/components/Link";
import AnimComp from "src/components/AnimCmp";

const HeadSection = () => {

    const TEXTS = ['Dynamic', 'innovative', 'powerful'];
    const [index, setIndex] = useState(0);
    useEffect(()=>{
        const intervalId = setInterval(
            ()=> setIndex((index) => index+1),
            3000
        );
        return () =>clearTimeout(intervalId);
    }, []);
    return <>
        <Box className="head-section container">
            <Container maxWidth="xl">
                <Grid container spacing={5} sx={{ flexGrow: 1 }} justifyContent="center">
                    <Grid item xs= {12} >
                        <Grid container spacing={5} sx={{ flexGrow: 1 }} direction="row" justifyContent="center" alignItems="center">
                            <Grid item lg={6} md = {6} sm = {6} sx={{ flex: 1 }}>
                                <Box className="h0 t-p mt-40">DOKDO</Box>
                                <TextTransition className = "h1 t-o trans-text" style={{display: 'flex', justifyContent: 'center'}} springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                                {/* <Box className="fs-s2 t-p mt-20">Dokdo is a business dedicated to enhancing the Solar Network ecosystem.</Box> */}
                                <Stack direction="row" className="mt-20" sx={{textAlign:'center'}} spacing={2}>
                                    <Link href="https://t.me/dokdo_official" icon={false} className="btn-lg bg-gp p-lr-20 no-line non-hover" title="Join community" />
                                </Stack>
                            </Grid>
                            <Grid item lg={6} md = {6} sm = {6} textAlign="center">
                                <AnimComp />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Box className="logo-container">
                        <Grid item xs= {12} justifyContent="center">
                            <Box className="fs-24-b t-o" style={{textAlign:'center'}}>Powering integrations from companies all around the world</Box>
                            <Stack direction="row" spacing={6} useFlexGap flexWrap="wrap" justifyContent='center' className="mt-20">
                                <Box component="img" src={solarIcon} />
                                <Box component="img" src={binanceIcon} />
                                <Box component="img" src={coinmarkgetIcon} />
                                <Box component="img" src={bitgetIcon} />
                                <Box component="img" src={gateIcon} />
                            </Stack>
                        </Grid>
                    </Box>
                </Grid>
            </Container>
        </Box>
    </>
}

export default HeadSection