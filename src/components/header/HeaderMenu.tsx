'use client'

import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Image,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMegaMenu.module.css';
import { Iconly } from 'react-iconly';

export function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box pb={120}>
      <header className={classes.header} style={{borderBottom: 'none', height: '100px'}}>
        <Group justify="space-between" h="100%">
          <Image
            alt="logo"
            src="/logo.png"
            style={{ width: "100%", height: "100%" }}
          />

          <Group h="100%" gap="24px" visibleFrom="sm" style={{ alignItems: "center" }}>
            <a
              href="#"
              className={classes.link}
              style={{
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "500",
                fontFamily: "Manrope",
                position: "relative",
                paddingBottom: "5px", // Add space for the red dot
              }}
            >
              ABOUT ME
              <span
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  top: "100%",
                  transform: "translateX(-50%)",
                  width: "4px",
                  height: "4px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  display: "block",
                }}
              ></span>
            </a>
            <a
              href="#"
              className={classes.link}
              style={{
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "500",
                fontFamily: "Manrope",
                position: "relative",
                paddingBottom: "5px", // Add space for the red dot
              }}
            >
              MARKET
            </a>
            <a
              href="#"
              className={classes.link}
              style={{
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "500",
                fontFamily: "Manrope",
                position: "relative",
                paddingBottom: "5px", // Add space for the red dot
              }}
            >
              PROJECTS
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default" style={{
              background: "#FFFFFF",
              height: "45px",
              borderRadius: "12px",
              color: "#000000",
              fontFamily: "Manrope",
              fontSize: "16px",
              fontWeight: "600"
            }}>SAY “HELLO!</Button>

            <Button
              variant="default"
              style={{
                background: "#171717",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                height: "45px",
                borderRadius: "12px",
                color: "#FFFFFF",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: "600",
                display: "flex", // Flexbox layout
                alignItems: "center", // Vertically align icon and text
                gap: "50px", // Space between icon and text
              }}
            >
              RESUME
              <Iconly name="Download" set="bold" size="medium" primaryColor="#FFFFFF" />
            </Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
