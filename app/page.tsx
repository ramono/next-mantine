'use client';

import { Grid, GridCol, Container, Flex, Title } from '@mantine/core';
import { HeaderMenu } from '../lib/HeaderMenu/HeaderMenu';
import { HeroImageRight } from '../lib/HeroImageRight/HeroImageRight';
import { FeaturesTitle } from '../lib/FeaturesTitle/FeaturesTitle';
import { StatsRing } from '../lib/StatsRing/StatsRing';
import { ArticleCardVertical } from '../lib/ArticleCardVertical/ArticleCardVertical';
import { FooterLinks } from '../lib/FooterLinks/FooterLinks';
import classes from "./page.module.css";

export default function HomePage() {
  return (
    <div className="wrap">
        <HeaderMenu />

        <HeroImageRight />

        <Container size="lg">
            <FeaturesTitle />
        </Container>

        <div className={classes.statsWrapper}>
            <Container size="lg">
                <StatsRing />
            </Container>
        </div>

        <div className={classes.newsWrapper}>
            <Container size="lg">
                <Grid>
                    <GridCol span={12}>
                        <Title order={2}>Latest news</Title>
                    </GridCol>
                </Grid>
            </Container>
            <Container size="lg">
                <Grid>
                    <GridCol span={6}>
                        <ArticleCardVertical />
                    </GridCol>
                    <GridCol span={6}>
                        <ArticleCardVertical />
                    </GridCol>
                </Grid>
            </Container>
        </div>

        <FooterLinks />
    </div>
  );
}
