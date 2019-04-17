#!/usr/bin/env python
# encoding: utf-8

from sanic import Sanic
from Sanic.response import text

async def get_news(size=10):

    async with aiohttp.ClientSession() as client:

